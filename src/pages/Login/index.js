import React from 'react';

import { Container, Form } from './style';

const Login = () => {
  return (
    <Container>
      <Form>
        <div className="title">
          <h1>Login</h1>
        </div>
        <input type="text" name="username" placeholder="Nome" />
        <input type="text" name="cpf" placeholder="CPF" />
        <button type="submit">Entrar</button>
      </Form>
    </Container>
  );
};

export default Login;
