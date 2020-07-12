import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background: #232323;
  color: #fff;
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #3c3c3c;
  width: 600px;
  height: 400px;
  border-radius: 8px;

  input {
    padding: 15px 45px;
    border-radius: 8px;
    border: 0;
    margin: 10px 0;
    font-weight: bold;
    color: #333;
  }

  button {
    border: transparent;
    padding: 15px 45px;
    border-radius: 8px;
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 0.5px;
    font-weight: bold;
    width: 255px;
    cursor: pointer;
    background: #fe9e0e;
    color: #fff;
    transition: background 0.3s;

    &:hover {
      background: ${shade(0.2, '#fe9e0e')};
    }
  }
`;
