import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom'
import Pizza from '../Pizza/Pizza'
import {useState, useEffect} from 'react'
import UserForm from '../User/UserForm'
import AdditionalsAndSostav from '../Additions/Additions'

function CreateOrder({match}) {
    const [pizza, setPizza] = useState([]);
    const [additions, setAdditions] = useState([]);
    const [selectedAdditions, setSelectedAdditions] = useState([]);
    const [priceOfAdditions, setPriceOfAdditions] = useState(0);
    const [userInput, setUserInput] = useState({});

    var history = useHistory();

    useEffect(() => {
        fetch(`https://3001-dd52ac3c-6816-4729-802c-b96ba0fb1a9e.ws-eu03.gitpod.io/api/pizza/${match.params.pizzaId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          })
        .then(response => response.json())
        .then(result => setPizza(result))
        .catch(error => console.log('error', error));
        fetch(`https://3001-dd52ac3c-6816-4729-802c-b96ba0fb1a9e.ws-eu03.gitpod.io/api/additionals`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          })
        .then(response => response.json())
        .then(result => setAdditions(result))
        .catch(error => console.log('error', error));
    }, []);

    function confirmOrder(...rest) {
        fetch('https://3001-dd52ac3c-6816-4729-802c-b96ba0fb1a9e.ws-eu03.gitpod.io/api/order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({...userInput, ...{pizzaId: pizza.id, selectedAdditions: selectedAdditions}})
          }).then(response => response.json()).then(order => history.push(`/order/${order.id}`));
    }

    return (
        <Container style={ {marginTop: "56px"}}>
            <Row>
                <Col xs={6}>
                    <Row>
                        <Col xs="auto">
                            <Pizza pizza={pizza}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs="auto">
                            <AdditionalsAndSostav availableAdditions={pizza.availableAdditions} selectedAdditions={selectedAdditions} setSelectedAdditions={setSelectedAdditions}
                                priceOfAdditions={priceOfAdditions} setPriceOfAdditions={setPriceOfAdditions}/>
                        </Col>
                    </Row>
                </Col>
                <Col xs={6}>
                    <UserForm userInput={userInput} setUserInput={setUserInput}/>
                </Col>
            </Row>
            <Row>
                <Col xs={5}>
                    Финальная цена = {pizza.price + priceOfAdditions}
                </Col>
                <Col xs="auto">
                    <Button variant="primary" onClick={confirmOrder}>Заказать</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CreateOrder;
