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
        {nombre: 'David Alemán', img: imgAleman, avatarClass: "avatar-aleman", juegosG: 24, juegosP: 27, setsG: 3, setsP: 3, victorias: 1},
        {nombre: 'Daniel Carmona', img: imgCarmona, avatarClass: "avatar-carmona", juegosG: 36, juegosP: 15, setsG: 5, setsP: 1, victorias: 2},
        {nombre: 'David Navarro', img: imgNavarro, avatarClass: "avatar-navarro", juegosG: 22, juegosP: 29, setsG: 2, setsP: 4, victorias: 0},
        {nombre: 'Jose Javier', img: imgJoseja, avatarClass: "avatar-joseja", juegosG: 20, juegosP: 31, setsG: 2, setsP: 4, victorias: 1}
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

      <h3 className="ronda">Primera ronda</h3>

      <div className="resultados">
          <div className="jornada">JORNADA <br/><span> 1</span></div>
          <div className="partido">
              <div>
                  <img className="miniresul" src={minipareja3}/>
                  <strong style={{color: 'red'}}> 6 0 6</strong>
              </div>
              <div>
                  <img className="miniresul" src={minipareja4}/>
                  <span style={{color: 'green'}}> 4 6 7</span>
              </div>
          </div>
      </div>

      <div className="resultados">
        <div className="jornada">JORNADA <br/><span> 2</span></div>
        <div className="partido">
            <div>
                <img className="miniresul" src={minipareja1}/>
                <strong style={{color: 'green'}}> 6 6</strong>
            </div>
            <div>
                <img className="miniresul" src={minipareja6}/>
                <span style={{color: 'red'}}> 2 1</span>
            </div>
        </div>
    </div>

    <div className="resultados">
        <div className="jornada">JORNADA <br/><span> 3</span></div>
        <div className="partido">
            <div>
                <img className="miniresul" src={minipareja5}/>
                <strong style={{color: 'green'}}> 6 1</strong>
            </div>
            <div>
                <img className="miniresul" src={minipareja2}/>
                <span style={{color: 'red'}}> 0 0</span>
            </div>
        </div>
    </div>

      <h4>Próximas jornadas</h4>
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
