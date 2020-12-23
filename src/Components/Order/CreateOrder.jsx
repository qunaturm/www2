import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Pizza from '../Pizza/Pizza'
import {useState, useEffect} from 'react'
import UserForm from '../Catalog/UserForm'
import AdditionalsAndSostav from '../Catalog/AdditionalsAndSostav'

function ConfirmOrderButton({pizza, input}){ 
    return (
        <div>Кнопка {pizza.id}</div>
    )
}

function AdditionsSelector({availableAdditions, additions, setSelectedAdditions}) {
    return (
        <AdditionalsAndSostav/>
    )
}

function InputUserData({data, setDate}) {

    return (
        <UserForm/>
    )

}

function CreateOrder({match}) {
    const [pizza, setPizza] = useState([]);
    const [additions, setAdditions] = useState([]);
    const [selectedAdditions, setSelectedAdditions] = useState([]);
    const [userInput, setUserInput] = useState({});

    useEffect(() => {
        fetch(`http://localhost:3001/api/pizza/${match.params.pizzaId}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          })
        .then(response => response.json())
        .then(result => setPizza(result))
        .catch(error => console.log('error', error));
        fetch(`http://localhost:3001/api/additionals`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            }
          })
        .then(response => response.json())
        .then(result => setAdditions(result))
        .catch(error => console.log('error', error));
    }, []);

    return (
        <Container style={ {marginTop: "56px"}}>
            <Row>
                <Col xs={6}>
                    <Row>
                        <Pizza pizza={pizza} myButton={ConfirmOrderButton} myButtonProp={{pizza, userInput}}/>
                    </Row>
                    <Row>
                        <AdditionsSelector/>
                    </Row>
                </Col>
                <Col xs={6}>
                    <InputUserData data={userInput} setDate={setUserInput} />
                </Col>
            </Row>
        </Container>
    )
}

export default CreateOrder;
