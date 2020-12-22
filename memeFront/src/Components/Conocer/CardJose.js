import { Card, Image} from 'react-bootstrap';
import './CardConocer.css';
import Avatar1 from './Avatar1.PNG';


function CardJose() {

    return (
                <Card.Body className="cardAvatar">
                    <Card.Title>
                        <Image src={Avatar1} className="avatar"/>
                        </Card.Title>
                    
                    <Card.Header>
                        <h4>Jose</h4>
                    </Card.Header>
                    <Card.Text>
                       <ul className="list-group">
                        <li className="list-group-item">En su tiempo libre hackea todo lo que ve </li>
                        </ul>
                        </Card.Text>
                </Card.Body>
    );
}

export default CardJose;