import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins';
    /* background: #ccc; */
    height: 100vh;
  background: #232323;
  }

  table {
  width:100%;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  color: #222;
}
th, td {
  padding: 15px;
  text-align: left;
}
 tr:nth-child(even) {
  background-color: #eee;
}
 tr:nth-child(odd) {
 background-color: #fff;
}
 th {
  background-color: black;
  color: white;
}

`;

export default Global;
