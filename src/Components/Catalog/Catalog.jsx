import {Row, Col, Container, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useState, useEffect} from 'react'
import Pizza from '../Pizza/Pizza'

function OrderLink(pizza, ...rest) {
    return (
        <>  
            <Link to={`/createOrder/${pizza.id}`} >
                <Button variant="primary">{pizza.price} рублей</Button>
            </Link>
        </>
    )
}

function Catalog() {
    const [pizzas, setPizzas] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/pizza", {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          })
        .then(response => response.json())
        .then(result => setPizzas(result))
        .catch(error => console.log('error', error));
    }, []);

    return (
        <Container>
            <Row>
                {pizzas.map(function(pizza) {
                    return (
                            <Col xs={4} style={{marginTop: "10px", padding: "10px"}}>
                                <Pizza pizza={pizza} myButton={OrderLink} myButtonProp={pizza}/>
                            </Col>
                        );
                    })
                }
           </Row>
        </Container>
    );
}

export default Catalog;
