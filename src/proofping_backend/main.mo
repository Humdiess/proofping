import Time "mo:base/Time";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Array "mo:base/Array";

actor ProofPing {

  // ===== DATA STRUCTURE =====

  // Tipe untuk menyimpan informasi kehadiran
  type AttendanceRecord = {
    participantName : Text;
    timestamp : Int;
  };

  // Tipe akun pengguna
  type User = {
    username : Text;
    password : Text;
    role : Text; // "admin" atau "user"
  };

  // Daftar event dan kehadiran
  stable var eventKeys : [Text] = [];
  stable var eventCounter : Nat = 0;
  var events : HashMap.HashMap<Text, [AttendanceRecord]> = HashMap.HashMap<Text, [AttendanceRecord]>(0, Text.equal, Text.hash);

  // Daftar pengguna
  stable var users : [User] = [];

  // ===== FUNCTION =====

  // Fungsi 1: Registrasi Pengguna Baru
  public func register(username : Text, password : Text, role : Text) : async Text {
    if (Text.size(username) == 0 or Text.size(password) < 6) {
      return "Error: Username tidak boleh kosong dan password minimal 6 karakter.";
    };
    if (role != "admin" and role != "user") {
      return "Error: Peran hanya bisa 'admin' atau 'user'.";
    };

    // Cek apakah username sudah terdaftar
    for (user in users.vals()) {
      if (user.username == username) {
        return "Error: Username sudah terdaftar.";
      };
    };

    // Tambahkan pengguna baru
    users := Array.append(users, [{ username; password; role }]);
    return "Registrasi berhasil. Silakan login.";
  };

  // Fungsi 2: Login Pengguna
  public query func login(username : Text, password : Text) : async ?Text {
    for (user in users.vals()) {
      if (user.username == username and user.password == password) {
        return ?user.role; // Kembalikan peran ("admin" atau "user")
      };
    };
    return null; // Login gagal
  };

  // Fungsi 3: Membuat Event Baru (Admin)
  public func createEvent(adminUsername : Text, adminPassword : Text) : async Text {
    if (not isAdmin(adminUsername, adminPassword)) {
      return "Error: Akses ditolak. Hanya admin yang dapat membuat event.";
    };

    eventCounter += 1;
    let eventCode = "EVENT-" # Nat.toText(eventCounter);
    eventKeys := Array.append<Text>(eventKeys, [eventCode]);
    events.put(eventCode, []);
    return "Event berhasil dibuat dengan kode: " # eventCode;
  };


  // Fungsi 4: Klaim Kehadiran (User)
  public func claimAttendance(eventCode : Text, participantName : Text) : async Text {
    if (Text.size(participantName) == 0) {
      return "Error: Nama peserta tidak boleh kosong.";
    };

    switch (events.get(eventCode)) {
      case (null) return "Error: Event code tidak ditemukan.";
      case (?attendanceList) {
        let currentTime = Time.now();
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

  // Fungsi 5: Ambil Daftar Kehadiran
  public query func getAttendanceList(eventCode : Text) : async [AttendanceRecord] {
    switch (events.get(eventCode)) {
      case (null) return []; 
      case (?attendanceList) return attendanceList;
    };
  };

  // Fungsi 6: Hapus Event (Admin)
  public func deleteEvent(adminUsername : Text, adminPassword : Text, eventCode : Text) : async Text {
    if (not isAdmin(adminUsername, adminPassword)) {
      return "Error: Akses ditolak. Hanya admin yang dapat menghapus event.";
    };

    switch (events.remove(eventCode)) {
      case (null) return "Error: Event tidak ditemukan.";
      case (_) {
        eventKeys := Array.filter<Text>(eventKeys, func key { key != eventCode });
        return "Event berhasil dihapus.";
      };
    };
  };

  // Fungsi 7: Ambil Semua Event
  public query func getAllEvents(username : Text, password : Text) : async ?[Text] {
    if (isAdmin(username, password)) {
      return ?eventKeys;
    };
    return null; // Hanya admin yang bisa melihat semua event
  };

  // ===== HELPER FUNCTIONS =====

  // Validasi admin
  func isAdmin(username : Text, password : Text) : Bool {
    for (user in users.vals()) {
      if (user.username == username and user.password == password and user.role == "admin") {
        return true;
      };
    };
    return false;
  };
}
