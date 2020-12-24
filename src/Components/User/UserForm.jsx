import { React, useState, useEffect } from "react";
import { Col, InputGroup, FormControl } from "react-bootstrap";

function useInput(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    function onChange(e) {
        setValue(e.target.value);
    }
    return {
        value,
        onChange,
    };
}

function UserForm({ userInput, setUserInput }) {
    const customerName = useInput("");
    const customerEmail = useInput("");
    const customerAddress = useInput("");
    const customerPhone = useInput("");

    useEffect(() =>
        setUserInput({
            customerName: customerName.value,
            customerEmail: customerEmail.value,
            customerAddress: customerAddress.value,
            customerPhone: customerPhone.value,
        }), [customerName.value, customerEmail.value, customerAddress.value, customerPhone.value, setUserInput]
    );

    return (
        <Col>
            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Имя</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value = {customerName.value} onChange = {customerName.onChange}
                    placeholder="Иван Иванов"
                    aria-label="customerName"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Emal</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value = {customerEmail.value} onChange = {customerEmail.onChange}
                    placeholder="ivan_ivanov@mail.ru"
                    aria-label="customerEmail"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Номер</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value = {customerPhone.value} onChange = {customerPhone.onChange}
                    placeholder="+79999999999"
                    aria-label="customerPhone"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Prepend>
                    <InputGroup.Text id="basic-addon1">Адрес доставки</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl value = {customerAddress.value} onChange = {customerAddress.onChange}
                    placeholder="Улица Пушкина, дом Колотушкина"
                    aria-label="customerAdress"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Col>

    );
}

export default UserForm;
