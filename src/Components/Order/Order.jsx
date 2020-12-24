import { Card, Button, Container, Col, Row, Table, InputGroup, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import Pizza from '../Pizza/Pizza';

function Order({ match }) {
    const [orderInfo, setOrderInfo] = useState({});
    const [pizza, setPizza] = useState({});
    const [additions, setAdditions] = useState([]);
    const [review, setReview] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        fetch(`https://3001-dd52ac3c-6816-4729-802c-b96ba0fb1a9e.ws-eu03.gitpod.io/api/order/${match.params.orderId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => response.json())
            .then(result => setOrderInfo(result))
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

    useEffect(() => {
        fetch(`https://3001-dd52ac3c-6816-4729-802c-b96ba0fb1a9e.ws-eu03.gitpod.io/api/pizza/${orderInfo.pizzaId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        })
            .then(response => response.json())
            .then(result => setPizza(result))
            .catch(error => console.log('error', error));
        setReview(orderInfo.review);
    }, [orderInfo]);

    function submitReview(...rest) {
        fetch(`https://3001-dd52ac3c-6816-4729-802c-b96ba0fb1a9e.ws-eu03.gitpod.io/api/order/${orderInfo.id}/review`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({review: review})
          }).then(response => response.json()).then((a) => setSubmitted(true));
    }

    return (
        <Container style={{ marginTop: "56px" }}>
            <Row>
                <Col xs={6}>
                    <Row>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Имя</th>
                                    <th>Фамилия</th>
                                    <th>Эл. почта</th>
                                    <th>Номер телефона</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Вы</td>
                                    <td>{orderInfo.customerName}</td>
                                    <td>{orderInfo.customerAddress}</td>
                                    <td>{orderInfo.customerEmail}</td>
                                    <td>{orderInfo.customerPhone}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text>Отзыв</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl  value = {review} onChange = {(e) => setReview(e.target.value)}
                            as="textarea" 
                            aria-label="" />
                        </InputGroup>
                        {!orderInfo.review && !submitted && <Button onClick={submitReview}>Оставить отзыв</Button>}
                    </Row>
                </Col>
                <Col xs={6}>
                    <Pizza pizza={pizza} />
                </Col>
            </Row>
        </Container>
    )
}

export default Order;