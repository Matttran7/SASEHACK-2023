import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ApplicationPage from "./pages/ApplicationPage";
import LandingPage from './pages/LandingPage';
import './App.css'; 

function App() {
  // State to track the active page
  const [activePage, setActivePage] = useState('landing'); 

  return (
    <div>
      <BrowserRouter>
        <div>
          <Routes>
            <Route
              path='/'
              element={<LandingPage setActivePage={setActivePage} />}
            />
            <Route
              path='/application'
              element={<ApplicationPage setActivePage={setActivePage} />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;