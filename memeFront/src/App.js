import React from 'react';
import './App.css';
import NavBar from './Components/Navbar';
import MyVerticallyCenteredModal from './Components/Categories/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Cards from './Components/Tarjetas/Cards';


function App() {


  return (
  <>
  <NavBar/>
  <Cards/>
  </>
  );
}

export default App;
