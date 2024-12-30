import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Events from './pages/Events/Events';
import Reservation from './pages/Reservation/Reservation';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
