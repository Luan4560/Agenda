import React from 'react';

import { Container, Form } from './style';

const SignUp = () => {
  return (
    <Container>
      <Form>
        <div className="title">
          <h1>Agenda</h1>
        </div>
        <input type="text" name="username" placeholder="Nome" />
        <input type="tel" name="phone" placeholder="Celular" />
        <input type="text" name="cpf" placeholder="CPF" />
        <button type="submit">Cadastrar</button>
      </Form>
    </Container>
  );
};

export default SignUp;
