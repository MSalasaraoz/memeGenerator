import { Card, Image} from 'react-bootstrap';
import './CardConocer.css';
import Avatar3 from './Avatar3.PNG';


function CardMariano() {

    return (
                <Card.Body className="cardAvatar">
                    <Card.Title>
                        <Image src={Avatar3} className="avatar"/>
                        </Card.Title>
                    
                    <Card.Header>
                        <h4>Mariano</h4>
                    </Card.Header>
                    <Card.Text>
                       <ul className="list-group">
                        <li className="list-group-item">Creador de la "Casita historica de Tucuman"</li>
                        </ul>
                        </Card.Text>
                </Card.Body>
    );
}

export default CardMariano;