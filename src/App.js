import React from 'react';
import logo from './wpt-logo.png';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from './Carousel.js';

import minipareja1 from './img/miniparejas/mini-aleman-carmona.png';
import minipareja2 from './img/miniparejas/mini-aleman-joseja.png';
import minipareja3 from './img/miniparejas/mini-aleman-navarro.png';
import minipareja4 from './img/miniparejas/mini-joseja-carmona.png';
import minipareja5 from './img/miniparejas/mini-navarro-carmona.png';
import minipareja6 from './img/miniparejas/mini-navarro-joseja.png';

import imgAleman from './img/jugadores/david_aleman.png';
import imgCarmona from './img/jugadores/yo.png';
import imgNavarro from './img/jugadores/david_navarro.png';
import imgJoseja from './img/jugadores/jose_javier.png';

function calculoMedia(jugador){
    var media = (jugador.juegosG - jugador.juegosP) + (jugador.setsG - jugador.setsP) * 2;

    return media;
}

function App() {
    var jugadores = [
        {nombre: 'David Alemán', img: imgAleman, avatarClass: "avatar-aleman", juegosG: 15, juegosP: 19, setsG: 1, setsP: 2, victorias: 0},
        {nombre: 'Daniel Carmona', img: imgCarmona, avatarClass: "avatar-carmona", juegosG: 22, juegosP: 12, setsG: 3, setsP: 0, victorias: 1},
        {nombre: 'David Navarro', img: imgNavarro, avatarClass: "avatar-navarro", juegosG: 12, juegosP: 22, setsG: 0, setsP: 3, victorias: 0},
        {nombre: 'Jose Javier', img: imgJoseja, avatarClass: "avatar-joseja", juegosG: 19, juegosP: 15, setsG: 2, setsP: 1, victorias: 1}
    ];

    for (var i=0; i<jugadores.length; i++){
        jugadores[i].media = calculoMedia(jugadores[i]);
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
          { ' Escuadrón ' }
        </Navbar.Brand>
      </Navbar>
      <br />
      <br />
      <br />
      <br />

      <h4>Últimos resultados</h4>
      <div className="resultados">
          <div className="jornada">JORNADA <br/><span>1</span></div>
          <div className="partido">
              <div>
                  <img className="miniresul" src={minipareja3}/>
                  <strong style={{color: 'red'}}> 1 4</strong>
              </div>
              <div>
                  <img className="miniresul" src={minipareja4}/>
                  <span style={{color: 'green'}}> 6 6</span>
              </div>
          </div>

          <div className="jornada">JORNADA <br/><span>2</span></div>
          <div className="partido">
              <div>
                  <img className="miniresul" src={minipareja1}/>
                  <strong style={{color: 'green'}}> 6 4</strong>
              </div>
              <div>
                  <img className="miniresul" src={minipareja6}/>
                  <span style={{color: 'red'}}> 4 3</span>
              </div>
          </div>
      </div>

      <h4>Próxima jornada</h4>
        {<Carousel/>}

      <h4 className="espacioclas">Clasificación</h4>
        {
            jugadores.sort((a,b) => b.media - a.media).sort((a,b) => b.victorias - a.victorias).map(
                (e, key) =>
                    <div key={key} className="clasif">
                        <div className="puesto">{key + 1}º</div>
                        <div className="pareja"><img className={e.avatarClass} src={e.img}/><br/> {e.nombre}</div>
                        <div className="datos">
                            <div className="victorias"><span className="fuente">{e.victorias}</span> <span className="iconoVictorias">V</span></div>
                            <div className="puntos"><span className="fuente">{e.media}</span> <span className="iconoPuntos">P</span></div>
                        </div>
                    </div>
            )
        }

        <footer className="footer">
            Powered by <a href="https://carmona44.github.io/portfolio/">DCA</a>
        </footer>
    </div>
  );
}

export default App;
