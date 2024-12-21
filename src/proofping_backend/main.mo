import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Nat "mo:base/Nat";

// Actor utama untuk ProofPing
actor {

  // ===== DATA STRUCTURE =====

  // Tipe untuk menyimpan informasi kehadiran
  type AttendanceRecord = {
    participantName : Text;
    timestamp : Int;
  };

  // Daftar event (stabil untuk disimpan di canister)
  stable var eventKeys : [Text] = [];
  stable var eventCounter : Nat = 0;

  // Struktur data runtime (tidak stabil)
  var events : HashMap.HashMap<Text, [AttendanceRecord]> = HashMap.HashMap<Text, [AttendanceRecord]>(0, Text.equal, Text.hash);

  // ===== FUNCTIONS =====

  // Fungsi untuk membuat event baru oleh pemilik acara
  public func createEvent(ownerName : Text) : async Text {
    eventCounter += 1;
    let eventCode = "EVENT-" # Nat.toText(eventCounter); // Generate kode unik event

    // Tambahkan event ke daftar stabil
    eventKeys := Array.append<Text>(eventKeys, [eventCode]);

    // Inisialisasi event baru di struktur data runtime
    events.put(eventCode, []);
    return "Event berhasil dibuat dengan kode: " # eventCode # " oleh " # ownerName;
  };

  // Fungsi untuk klaim kehadiran oleh pengunjung
  public func claimAttendance(eventCode : Text, participantName : Text) : async Text {
    // Periksa apakah event dengan kode ini ada
    switch (events.get(eventCode)) {
      case (null) {
        return "Error: Event tidak ditemukan.";
      };
      case (?attendanceList) {
        // Tambahkan kehadiran baru ke daftar
        let newRecord : AttendanceRecord = {
          participantName = participantName;
          timestamp = 0; // Placeholder timestamp
        };
        let updatedList = Array.append<AttendanceRecord>(attendanceList, [newRecord]);
        events.put(eventCode, updatedList);
        return "Kehadiran berhasil dicatat untuk " # participantName;
      };
    };
  };

  // Fungsi untuk mengambil daftar kehadiran dari suatu event
  public query func getAttendanceList(eventCode : Text) : async [AttendanceRecord] {
    switch (events.get(eventCode)) {
      case (null) return []; // Jika tidak ada event, kembalikan array kosong
      case (?attendanceList) return attendanceList;
    };
  };

  // Fungsi untuk mendapatkan semua event yang telah dibuat
  public query func getAllEvents() : async [Text] {
    return eventKeys; // Kembalikan daftar semua kode event
  };
}