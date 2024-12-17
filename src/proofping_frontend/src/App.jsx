import { useState } from 'react';
import { proofping_backend } from 'declarations/proofping_backend'; // Import backend canister

function App() {
  const [eventCode, setEventCode] = useState('');
  const [participantName, setParticipantName] = useState('');
  const [attendanceMessage, setAttendanceMessage] = useState('');
  const [attendanceList, setAttendanceList] = useState([]);
  const [greeting, setGreeting] = useState('');

  // Fungsi untuk membuat event baru
  const handleCreateEvent = async (event) => {
    event.preventDefault();
    try {
      const code = await proofping_backend.createEvent();
      setEventCode(code); // Menyimpan eventCode yang baru dibuat
    } catch (error) {
      console.error("Error creating event: ", error);
    }
  };

  // Fungsi untuk klaim kehadiran
  const handleClaimAttendance = async (event) => {
    event.preventDefault();
    try {
      const message = await proofping_backend.claimAttendance(eventCode, participantName);
      setAttendanceMessage(message); // Menampilkan pesan klaim kehadiran
      fetchAttendanceList(); // Mengambil daftar kehadiran setelah klaim berhasil
    } catch (error) {
      console.error("Error claiming attendance: ", error);
    }
  };

  // Fungsi untuk mengambil daftar kehadiran
  const fetchAttendanceList = async () => {
    try {
      const list = await proofping_backend.getAttendanceList(eventCode);
      setAttendanceList(list); // Menyimpan daftar kehadiran
    } catch (error) {
      console.error("Error fetching attendance list: ", error);
    }
  };

  // Fungsi untuk mengubah nama
  const handleGreetingSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.elements.name.value;
    try {
      const greetingMessage = await proofping_backend.greet(name);
      setGreeting(greetingMessage);
    } catch (error) {
      console.error("Error greeting: ", error);
    }
  };

  return (
    <main>
      <h1>Welcome to ProofPing Event</h1>

      {/* Bagian untuk membuat event */}
      <section>
        <h2>Create Event</h2>
        <button onClick={handleCreateEvent}>Create Event</button>
        {eventCode && <p>Event Code: {eventCode}</p>}
      </section>

      {/* Bagian untuk klaim kehadiran */}
      <section>
        <h2>Claim Attendance</h2>
        <form onSubmit={handleClaimAttendance}>
          <label htmlFor="name">Your Name: </label>
          <input
            id="name"
            type="text"
            value={participantName}
            onChange={(e) => setParticipantName(e.target.value)}
            required
          />
          <button type="submit">Claim Attendance</button>
        </form>
        {attendanceMessage && <p>{attendanceMessage}</p>}
      </section>

      {/* Menampilkan daftar kehadiran */}
      <section>
        <h2>Attendance List</h2>
        <button onClick={fetchAttendanceList}>Get Attendance</button>
        <ul>
          {attendanceList.map((record, index) => (
            <li key={index}>
              {record.participantName} - {new Date(record.timestamp / 1000).toLocaleString()}
            </li>
          ))}
        </ul>
      </section>

      {/* Bagian untuk greeting */}
      <section>
        <h2>Greet</h2>
        <form onSubmit={handleGreetingSubmit}>
          <label htmlFor="name">Enter your name: </label>
          <input id="name" type="text" />
          <button type="submit">Greet</button>
        </form>
        {greeting && <p>{greeting}</p>}
      </section>
    </main>
  );
}

export default App;
