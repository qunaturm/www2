import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';

const userForm = () => (
  <div>
    <h1>Заполните поля ниже, чтобы сделать заказ</h1>
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
);

ReactDOM.render(<userForm />, document.getElementById('root'));

export default userForm;
