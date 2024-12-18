import * as React from 'react';
import { useState, useEffect } from 'react';
import Peserta from './pages/Peserta';
import Pemilik from './pages/Pemilik';
import LandingPage from './pages/LandingPage';

function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.hash);

  // Update route based on hash changes
  React.useEffect(() => {
    const handleHashChange = () => setCurrentRoute(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  let content;
  if (currentRoute === '#/peserta') {
    content = <Peserta />;
  } else if (currentRoute === '#/pemilik') {
    content = <Pemilik />;
  } else {
    content = <LandingPage />;
  }

  return <div>{content}</div>;
}

export default App;
