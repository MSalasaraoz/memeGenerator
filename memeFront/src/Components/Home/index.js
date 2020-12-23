import React, {useState} from 'react';
import NavBar from '../Navbar';
import Category from '../Categories';

function Home(){
    const [datos,setDatos] = useState({});
    return(
        <>
 <NavBar/>
 <Category/>
        </>
    );
}

export default Home;