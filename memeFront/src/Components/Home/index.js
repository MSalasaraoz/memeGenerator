import React, {useState} from 'react';
import NavBar from '../Navbar';
import Category from '../Categories';

function Home(){
    const [datos,setDatos] = useState({});
    return(
        <>
 <NavBar/>
 <span><br></br> <br></br></span>
 <Category/>
        </>
    );
}

export default Home;