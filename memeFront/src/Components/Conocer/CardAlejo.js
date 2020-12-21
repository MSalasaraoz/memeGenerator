import { Card, Image} from 'react-bootstrap';
import './CardConocer.css';
import Avatar4 from './Avatar4.PNG';


function CardAlejo() {

    return (
                <Card.Body className="cardAvatar">
                    <Card.Title>
                        <Image src={Avatar4} className="avatar"/>
                        </Card.Title>
                    
                    <Card.Header>
                        <h4>Alejo</h4>
                    </Card.Header>
                    <Card.Text>
                       <ul className="list-group">
                        <li className="list-group-item">Full Stack Developer, Fanatico del anime</li>
                        </ul>
                        </Card.Text>
                </Card.Body>
    );
}

export default CardAlejo;