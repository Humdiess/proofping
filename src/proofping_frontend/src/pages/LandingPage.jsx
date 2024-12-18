import React from 'react';

function LandingPage() {
  return (
    <div>
      <h1>Selamat Datang di ProofPing</h1>
      <button onClick={() => window.location.hash = '/peserta'}>Masuk sebagai Peserta Event</button>
      <button onClick={() => window.location.hash = '/pemilik'}>Masuk sebagai Pemilik Event</button>
    </div>
  );
}

export default LandingPage