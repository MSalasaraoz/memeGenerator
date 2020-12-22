import React from 'react';
import './index.css';

function Footer() {

    return(

        <div className="container-footer d-flex col-lg-12 justify-content-around py-2">
            <div className="align-self-center">
                <a href="#"><img src="" alt=""></img></a>
            </div>
            <div className="align-self-center">
                Copyright 2020 &copy; Meme Generator, Todos los derechos reservados.
            </div>
            <div className="align-self-center">
                <a href="https://www.facebook.com/rollingtraveltucuman/" target="_blank"><img src="./img/facebook1.png" alt=""></img></a>
                <a href="https://twitter.com/explore" target="_blank"><img src="./img/twitter1.png" alt=""></img></a>
                <a href="https://www.instagram.com/" target="_blank"><img src="./img/instagram1.png" alt=""></img></a>
            </div>
            </div>

    );
};

export default Footer;