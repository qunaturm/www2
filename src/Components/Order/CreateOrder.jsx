import { Container } from "react-bootstrap";
import { Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Pizza from '../Pizza/Pizza'
import {useState, useEffect} from 'react'

function CreateOrder({match}) {
    const [pizza, setPizza] = useState([]);

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
    }, []);

    return(
       <div class="container">
            <Container style={ {marginTop: "56px"}}>Pizza id = {match.params.pizzaId}</Container>
            <Pizza pizza={pizza}/>
        </div>
    )
}

export default CreateOrder;
