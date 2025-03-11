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
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" elcdement={<Menu />} />
        <Route path="/events" element={<Events />} />
        <Route path="/reservation" element={<Reservation />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
