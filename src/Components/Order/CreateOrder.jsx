import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import Pizza from '../Pizza/Pizza'
import {useState, useEffect} from 'react'
import userForm from '../Catalog/userForm'
import { Formik, Field, Form } from 'formik';

function ConfirmOrderButton({pizza, input}){ 
    return (
        <div>Кнопка {pizza.id}</div>
    )
}

function AdditionsSelector({availableAdditions, additions, setSelectedAdditions}) {
    return (
        <div>additionals selectors</div>
    )
}

function InputUserData({data, setDate}) {

    return (
        <div>
        <h2>Заполните поля ниже, чтобы сделать заказ</h2>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            address: '',
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
        <Form>
        <label htmlFor="firstName">Имя</label>
        <Field id="firstName" name="firstName" placeholder="Иван" />

        <label htmlFor="lastName">Фамилия</label>
        <Field id="lastName" name="lastName" placeholder="Иванов" /> 

        <label htmlFor="email">Электронная почта</label>
        <Field id="email" name="email" placeholder="ivan_ivanov@mail.ru" />

        <label htmlFor="email">Адрес доставки</label>
        <Field id="lastName" name="lastName" placeholder="Проспект Гагарина 23 к.1" />

        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <button type="submit">Заказать</button>
      </Form>
    </Formik>
  </div>
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
                        <AdditionsSelector availableAdditions={pizza.additionals} additions={additions} setSelectedAdditions={setSelectedAdditions}/>
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
