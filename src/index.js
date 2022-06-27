import  Reat from 'react';
import ReactDOM from 'react-dom';

//import Primeiro from './components/Primeiro';
//import BomDia from './components/Bomdia.jsx';
import Multi from './components/Multiplos';

ReactDOM.render(
  <div>
    <Multi.BoaTarde nome="Ana" />
    <Multi.BoaNoite nome="Bia"/>
  </div>
  , document.getElementById('root'));
