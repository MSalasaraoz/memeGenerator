import React from 'react';
import './App.css';
import MyVerticallyCenteredModal from './Components/Categories/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Cards from './Components/Tarjetas/Cards';
import Home from './Components/Home';
import Item from './Components/Items';
import Footer from './Components/Footer';
import NavBar from './Components/Navbar';



function App() {


  return (
    <>
      <NavBar />
      <Cards />
      <Home />
      <Item />
      <Footer />
    </>
  );
}

export default App;
