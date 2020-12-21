import { Card, Image} from 'react-bootstrap';
import './CardConocer.css';
import Avatar2 from './Avatar2.PNG';


function CardTony() {

    return (
                <Card.Body className="cardAvatar">
                    <Card.Title>
                        <Image src={Avatar2} className="avatar"/>
                        </Card.Title>
                    
                    <Card.Header>
                        <h4>Tony</h4>
                    </Card.Header>
                    <Card.Text>
                       <ul className="list-group">
                        <li className="list-group-item">Experto en backend</li>
                        </ul>
                        </Card.Text>
                </Card.Body>
    );
}

export default CardTony;