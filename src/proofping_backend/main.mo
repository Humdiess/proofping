// Import library Time untuk timestamp
import Time "mo:base/Time";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Array "mo:base/Array";

// Definisi utama actor canister
actor ProofPing {

  // ===== DATA STRUCTURE =====
  
  // Tipe untuk menyimpan informasi kehadiran
  type AttendanceRecord = {
    participantName : Text;
    timestamp : Int;
  };

  // Tipe stabil untuk menyimpan daftar event
  stable var eventKeys : [Text] = [];
  stable var eventCounter : Nat = 0;

  // Variabel runtime (non-stable) menggunakan HashMap
  var events : HashMap.HashMap<Text, [AttendanceRecord]> = HashMap.HashMap<Text, [AttendanceRecord]>(0, Text.equal, Text.hash);

  // ===== FUNCTION =====

  // Fungsi 1: Membuat Event Baru
  public func createEvent() : async Text {
    eventCounter += 1;
    let eventCode = "EVENT-" # Nat.toText(eventCounter); // Generate event code unik
    
    // Tambahkan event ke dalam daftar stabil
    eventKeys := Array.append<Text>(eventKeys, [eventCode]);
    
    // Inisialisasi daftar kehadiran di runtime HashMap
    events.put(eventCode, []);
    return eventCode;
  };

  // Fungsi 2: Klaim Kehadiran
  public func claimAttendance(eventCode : Text, participantName : Text) : async Text {
    let currentTime = Time.now(); // Ambil waktu sekarang (timestamp)
    
    // Periksa apakah event ada di HashMap
    switch (events.get(eventCode)) {
      case (null) {
        return "Error: Event code tidak ditemukan.";
      };
      case (?attendanceList) {
        // Tambahkan kehadiran baru ke daftar
        let newRecord : AttendanceRecord = {
          participantName = participantName;
          timestamp = currentTime;
        };
        let updatedList = Array.append<AttendanceRecord>(attendanceList, [newRecord]);
        events.put(eventCode, updatedList);
        return "Kehadiran berhasil dicatat.";
      };
    };
  };

  // Fungsi 3: Ambil Daftar Kehadiran
  public query func getAttendanceList(eventCode : Text) : async [AttendanceRecord] {
    switch (events.get(eventCode)) {
      case (null) return []; // Jika tidak ada event, kembalikan array kosong
      case (?attendanceList) return attendanceList;
    };
  };

  // Fungsi 4: Ambil Daftar Semua Event
  public query func getAllEvents() : async [Text] {
    return eventKeys; // Kembalikan daftar semua event yang stabil
  };
}
