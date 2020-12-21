import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import MyVerticallyCenteredModal from '../Categories/Modal';

function NavBar(){
    const [modalShow, setModalShow] = React.useState(false);
    return(
<>
    <nav className="navbar navbar-custom navbar-expand-lg navbar-dark ">
        <nav className="navbar ">
        </nav>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between " id="navbarNav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link active" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="">Sobre Nosotros</a>
                </li>

                        <Button variant="warning" onClick={() => setModalShow(true)}>
                                            Agregar Categoria
                        </Button>
                        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
/>

            </ul>
        </div>
    </nav>
    </>
    );
}

export default NavBar;