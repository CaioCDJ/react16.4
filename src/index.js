import  React from 'react';
import ReactDOM from 'react-dom';

//import Primeiro from './components/Primeiro';
//import BomDia from './components/Bomdia.jsx';
//import Multi from './components/Multiplos';
//import Saudacao from './components/Saudacao';
import Pai from './components/Pai';
import Filho from './components/Filho';


ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Souza">
      <Filho nome="Jose"/>
      <Filho nome="Pedro"/>
      <Filho nome="Carlos"/>
    </Pai>
  </div>
  , document.getElementById('root'));
