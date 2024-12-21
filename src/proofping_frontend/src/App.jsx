import React from 'react';
import Peserta from './pages/Participant';
import Pemilik from './pages/EventOwner';
import LandingPage from './pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Home from './pages/AppOption';
import NotFoundPage from './pages/404';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/app' element={<Home />} />
        <Route path='/app/create-event' element={<Pemilik />} />
        <Route path='/app/attend-event' element={<Peserta />} />
        {/* not found */}
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
