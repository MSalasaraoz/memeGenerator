import React from 'react';
import './App.css';
import MyVerticallyCenteredModal from './Components/Categories/Modal';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Cards from './Components/Tarjetas/Cards';
import CardCategoria from './Components/Tarjetas/CardCategoria';
//import Home from './Components/Home';
//import Item from './Components/Items';
import Footer from './Components/Footer';
import NavBar from './Components/Navbar';



function App() {


  return (
    <>
      <NavBar />
      <CardCategoria />
      
    
      <Footer />
    </>
  );
}

export default App;
