import React from 'react';
import CardTony from './CardTony';
import CardMariano from './CardMariano';
import CardAlejo from './CardAlejo';
import CardJose from './CardJose';
import { Image } from 'react-bootstrap'
import Memea from './Animal.png';
import Vision from './Vision.png';
import Meme from './meme.PNG';
import './Conocer.css';


const Conocer = () => {

    return (
        <React.Fragment>
            <div className="container quienesSomos">
                <h1 className="quieneSomos"> Conócenos un poco mas</h1>
            <hr/>
            </div>

            <div className="container">
                <div className="card-deck m-5 row d-flex justify-content-center">
                    <CardAlejo />
                    <CardTony />
                    <CardMariano />
                    <CardJose />
                </div>

            </div>

            <div className="container d-none d-md-block">
                <hr />
                <div className="row">
                    <div className="col-6 arregloMargin ">
                        <h1 className="Titulo">Adictos a los memes</h1>
                        <p className="text-secondary">
                           Nos encantan los memes, se nota mucho?. En nuestras paginas encontraras
                           todos tipos de memes, de distintas categorias 
                        </p>
                    </div>
                    <div className="col-6 d-none d-md-block">
                        <Image src={Meme} className="meme" />
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <h1 className="titulo1 ">Somos una pagina que vive de aportes</h1>
                <div className="primerPrimerCard">
                    <p className="text-secondary">
                        Ultimamente con la pandemia del covid y el crecimiento exponencial del mundo virtual
                        los memes fueron fiel acompañantes en nuestros dias de encierro y para eso estamos 
                        nosotros tambien, para divertir a todos nuestros seguidores y hacer de esta pandemia 
                        sea menos pesada.
                     </p>
                </div>
                <hr />
            </div>

            <div className="container  d-none d-md-block">
                <div className="row d-flex text-align-center">
                    <div className="col-6 d-none d-md-block">
                        <Image src={Vision} className="vision" />
                    </div>
                    <div className="col-6">
                        <h1 className="titulo1">4 emprendedores con una visión: ayudar a la gente a disfrutar mas el encierro.</h1>
                        <p className="text-secondary">Somos un equipo de emprendedores con conocimientos 
                        en redes sociales y aprendiendo distintos lenguajes para el dia de mañana ser programadores. 
            </p>
                        <p className="text-secondary texto4">A quien no le gustan los simpsons?. Seguramente
                        la frase y las voces se te vengan a la cabeza con este meme.
            </p>
                    </div>
                </div>
                <hr />
            </div>

            <div className="container  d-none d-md-block">
                <div className="row d-flex text-align-center">
                    <div className="col-6">
                        <h1 className="titulo1">Somos una pagina segura y divertida</h1>
                        <p className="text-secondary">
                            Tambien tenemos nuestros memes de la pandemia estos no podian faltar, estos personajes pasaron por todas las redes sociales con sus bailes, seguro lo ves y ya sabes a que video pertenecen!!.
                    </p>
                        <p className="text-secondary">
                            
                            Cualquier critica es bien recibida para ayudarnos a crecer como personas y desarrolladores.
                            Muchas gracias por su visita!
                    </p>
                    </div>
                    <div className="col-6 d-none d-md-block">
                        <Image src={Memea} className="animal" />
                    </div>
                </div>
            </div>

        </React.Fragment>
    );

}

export default Conocer;
