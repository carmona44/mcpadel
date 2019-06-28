import React from 'react';
import logo from './wpt-logo.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from './Carousel.js';

import minipareja1 from './img/miniparejas/miniparejas1.png';
import minipareja2 from './img/miniparejas/miniparejas2.png';
import minipareja3 from './img/miniparejas/miniparejas3.png';
import minipareja4 from './img/miniparejas/miniparejas4.png';
import minipareja5 from './img/miniparejas/miniparejas5.png';
import minipareja6 from './img/miniparejas/miniparejas6.png';

function calculoMedia(pareja){
    var media = (pareja.juegosG - pareja.juegosP) + (pareja.setsG - pareja.setsP) * 2 + pareja.victorias * 3;

    return media;
}

function App() {
    var parejas = [
        {nombre1: 'Raúl', nombre2: 'Marcos', img: minipareja5, juegosG: 4, juegosP: 12, setsG: 0, setsP: 2, victorias: 0},
        {nombre1: 'Cartagenas', nombre2: 'Juanico', img: minipareja6, juegosG: 12, juegosP: 4, setsG: 2, setsP: 0, victorias: 1},
        {nombre1: 'Rubén', nombre2: 'Iván', img: minipareja1, juegosG: 6, juegosP: 12, setsG: 0, setsP: 2, victorias: 0},
        {nombre1: 'Ramón', nombre2: 'Daniel', img: minipareja2, juegosG: 12, juegosP: 6, setsG: 2, setsP: 0, victorias: 1},
        {nombre1: 'Esteban', nombre2: 'Fran', img: minipareja3, juegosG: 0, juegosP: 0, setsG: 0, setsP: 0, victorias: 0},
        {nombre1: 'Ismael', nombre2: 'Zamora', img: minipareja4, juegosG: 0, juegosP: 0, setsG: 0, setsP: 0, victorias: 0}
    ];

    for (var i=0; i<parejas.length; i++){
        parejas[i].media = calculoMedia(parejas[i]);
    }

  return (
    <div className="App">
      <Navbar fixed="top" bg="dark" variant="dark">
        <Navbar.Brand>
          <img
              src={logo}
              width="70"
              height="50"
              alt="World padel tour logo"
          />
          { ' McLiguilla' }
        </Navbar.Brand>
      </Navbar>
      <br />
      <br />
      <br />

      <h4>Últimos resultados</h4>
      <div className="resultados">
          <div className="jornada">JORNADA <br/><span>1</span></div>
          <div className="partido">
              <div><img className="miniresul" src={minipareja2}/><strong style={{color: 'green'}}> 6 6</strong></div>
              <div><img className="miniresul" src={minipareja1}/><span style={{color: 'red'}}> 2 4</span></div>
          </div>
          <div className="partido">
              <div><img className="miniresul" src={minipareja6}/><strong style={{color: 'green'}}> 6 6</strong></div>
              <div><img className="miniresul" src={minipareja5}/><span style={{color: 'red'}}> 2 2</span></div>
          </div>
          <div className="partido2">
              <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> X X</strong></div>
              <div><img className="miniresul" src={minipareja4}/><span style={{color: 'red'}}> X X</span></div>
          </div>
      </div>

      <h4>Próxima jornada</h4>
      <Carousel/>

      <h4 className="espacioclas">Clasificación</h4>
        {
            parejas.sort((a,b) => b.media - a.media).sort((a,b) => b.victorias - a.victorias).map(
                (e, key) =>
                    <div key={key} className="clasif">
                        <div className="puesto">{key + 1}</div>
                        <div className="pareja"><img className="avatar" src={e.img}/> {e.nombre1} / {e.nombre2}</div>
                        <div className="victorias"><h5>VICTORIAS</h5><span className="fuente">{e.victorias}</span></div>
                        <div className="media"><h5>MEDIA</h5><span className="fuente">{e.media}</span></div>
                    </div>
            )
        }
    </div>
  );
}

export default App;
