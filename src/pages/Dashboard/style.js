import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  color: #fff;

  table {
    width: 820px;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  height: 200px;
  border-radius: 8px;

  h2 {
    letter-spacing: 1px;
  }

  input {
    padding: 15px 15px;
    width: 400px;
    border-radius: 8px;
    border: 0;
    margin: 0 10px;
    font-weight: bold;
    color: #333;
  }

  button {
    border: transparent;
    padding: 15px 45px;
    border-radius: 8px;
    font-size: 16px;
    letter-spacing: 0.5px;
    font-weight: bold;
    width: 400px;
    cursor: pointer;
    background: #fe9e0e;
    color: #fff;
    transition: background 0.3s;

    &:hover {
      background: ${shade(0.2, '#fe9e0e')};
    }
  }
`;

export const Line = styled.hr`
  border: 1px solid #323232;
  width: 313px;
  margin: 15px 0;
`;
