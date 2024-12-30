import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Events from './pages/Events';
import Reservation from './pages/Reservation';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
    </Router>
  );
};

export default App;
