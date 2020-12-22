import React, {useState} from 'react';
import Formulario from '../Forms/CategoriesForm';
import NavBar from '../Navbar';

function Home(){
    const [datos,setDatos] = useState({});
    return(
        <>
 <NavBar/>
        </>
    );
}

export default Home;