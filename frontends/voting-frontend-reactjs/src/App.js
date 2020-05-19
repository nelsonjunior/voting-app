import React from 'react';
import './App.css';
import NavBar from './shared/components/NavBar';
import Home from './pages/Home';

import 'typeface-roboto';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

function App() {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
}

export default App;
