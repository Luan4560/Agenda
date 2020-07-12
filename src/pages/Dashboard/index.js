import React, { useState, useEffect } from 'react';

import { Container, Form } from './style';
import { cpfMask, telefoneMask } from '../../utils';
import api from '../../service/api';

const Dashboard = () => {
  const [maskCpf, setMaskCpf] = useState();
  const [maskPhone, setMaskPhone] = useState();
  const [maskNome, setMaskNome] = useState();
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const loadData = async () => {
      const response = await api.get('auth/list');
      setUserData(response.data);
    };

    loadData();
  }, []);

  function handleInputChange(event) {
    if (event.target.name === 'cpf') {
      setMaskCpf(event.target.value);
    } else if (event.target.name === 'phone') {
      setMaskPhone(telefoneMask(event.target.value));
    } else if (event.target.name === 'nome') {
      setMaskNome(event.target.value);
    }
  }

  // usecallback
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      username: maskNome,
      cpf: maskCpf,
      phone: maskPhone,
    };

    const response = await api.post('auth/register', data);
    console.log(response.data);
  }

  return (
    <Container>
      <Form onClick={handleSubmit}>
        <input
          type="text"
          name="nome"
          placeholder="Nome"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="cpf"
          placeholder="CPF"
          onChange={handleInputChange}
          value={maskCpf}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Telefone"
          value={maskPhone}
          onChange={handleInputChange}
        />
        <button type="submit">Adicionar</button>
      </Form>

      <div className="tabela">
        <table>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Action</th>
          </tr>

          {userData.map(data => (
            <tr>
              <td>{data.username}</td>
              <td>84854854291</td>
              <td>62991570077</td>
              <td>Delete, Update</td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  );
};

export default Dashboard;
