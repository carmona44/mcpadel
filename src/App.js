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
    var media = (pareja.juegosG - pareja.juegosP) + (pareja.setsG - pareja.setsP) * 2;

    return media;
}

function App() {
    var parejas = [
        {nombre1: 'Cartagenas', nombre2: 'Raúl', img: minipareja6, juegosG: 43, juegosP: 53, setsG: 4, setsP: 7, victorias: 2},
        {nombre1: 'Rubén', nombre2: 'Iván', img: minipareja1, juegosG: 68, juegosP: 83, setsG: 6, setsP: 10, victorias: 2},
        {nombre1: 'Ramón', nombre2: 'Daniel', img: minipareja2, juegosG: 73, juegosP: 41, setsG: 11, setsP: 2, victorias: 5},
        {nombre1: 'Esteban', nombre2: 'Fran', img: minipareja3, juegosG: 63, juegosP: 22, setsG: 10, setsP: 1, victorias: 5},
        {nombre1: 'Ismael', nombre2: 'Zamora', img: minipareja4, juegosG: 39, juegosP: 46, setsG: 4, setsP: 5, victorias: 2}
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
      <br />

      <h4>Últimos resultados</h4>
      <div className="resultados">
          <div className="jornada">JORNADA <br/><span>6</span></div>
          <div className="partido">
              <div><img className="miniresul" src={minipareja2}/><strong style={{color: 'green'}}> 6 7</strong></div>
              <div><img className="miniresul" src={minipareja1}/><span style={{color: 'red'}}> 2 6</span></div>
          </div>
          <div className="partido2">
              <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> X X</strong></div>
              <div><img className="miniresul" src={minipareja4}/><span style={{color: 'red'}}> X X</span></div>
          </div>
      </div>
        <div className="resultados">
            <div className="jornada">JORNADA <br/><span>7</span></div>
            <div className="partido">
                <div><img className="miniresul" src={minipareja2}/><strong style={{color: 'green'}}> X X</strong></div>
                <div><img className="miniresul" src={minipareja4}/><span style={{color: 'red'}}> X X</span></div>
            </div>
            <div className="partido2">
                <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> X X</strong></div>
                <div><img className="miniresul" src={minipareja6}/><span style={{color: 'red'}}> X X</span></div>
            </div>
        </div>
        <div className="resultados">
            <div className="jornada">JORNADA <br/><span>8</span></div>
            <div className="partido">
                <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> X X</strong></div>
                <div><img className="miniresul" src={minipareja1}/><span style={{color: 'red'}}> X X</span></div>
            </div>
            <div className="partido2">
                <div><img className="miniresul" src={minipareja6}/><strong style={{color: 'green'}}> X X</strong></div>
                <div><img className="miniresul" src={minipareja4}/><span style={{color: 'red'}}> X X</span></div>
            </div>
        </div>
        <div className="resultados">
            <div className="jornada">JORNADA <br/><span>9</span></div>
            <div className="partido">
                <div><img className="miniresul" src={minipareja4}/><strong style={{color: 'green'}}> X X</strong></div>
                <div><img className="miniresul" src={minipareja1}/><span style={{color: 'red'}}> X X</span></div>
            </div>
            <div className="partido">
                <div><img className="miniresul" src={minipareja2}/><strong style={{color: 'green'}}> X X</strong></div>
                <div><img className="miniresul" src={minipareja6}/><span style={{color: 'red'}}> X X</span></div>
            </div>
        </div>
        <div className="resultados">
            <div className="jornada">JORNADA <br/><span>10</span></div>
            <div className="partido">
                <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> X X</strong></div>
                <div><img className="miniresul" src={minipareja2}/><span style={{color: 'red'}}> X X</span></div>
            </div>
            <div className="partido">
                <div><img className="miniresul" src={minipareja1}/><strong style={{color: 'green'}}> 6 6</strong></div>
                <div><img className="miniresul" src={minipareja6}/><span style={{color: 'red'}}> 4 1</span></div>
            </div>
        </div>

      <h4>Próxima jornada</h4>
        {/*<Carousel/>*/}
        <div className="mensaje"><p>A la espera de saber los clasificados a la fase del KO. Buena suerte, la necesitareis ;)</p></div>

      <h4 className="espacioclas">Clasificación</h4>
        {
            parejas.sort((a,b) => b.media - a.media).sort((a,b) => b.victorias - a.victorias).map(
                (e, key) =>
                    <div key={key} className="clasif">
                        <div className="puesto">{key + 1}º</div>
                        <div className="pareja"><img className="avatar" src={e.img}/><br/> {e.nombre1} / {e.nombre2}</div>
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


/*
    RESULTADOS 1ª vuelta por si las reclamaciones


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
 <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> 6 6</strong></div>
 <div><img className="miniresul" src={minipareja4}/><span style={{color: 'red'}}> 2 3</span></div>
 </div>
 </div>
 <div className="resultados">
 <div className="jornada">JORNADA <br/><span>2</span></div>
 <div className="partido">
 <div><img className="miniresul" src={minipareja2}/><strong style={{color: 'green'}}> 6 6</strong></div>
 <div><img className="miniresul" src={minipareja4}/><span style={{color: 'red'}}> 1 4</span></div>
 </div>
 <div className="partido">
 <div><img className="miniresul" src={minipareja1}/><strong style={{color: 'green'}}> 6 6</strong></div>
 <div><img className="miniresul" src={minipareja5}/><span style={{color: 'red'}}> 4 2</span></div>
 </div>
 <div className="partido2">
 <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> 6 6</strong></div>
 <div><img className="miniresul" src={minipareja6}/><span style={{color: 'red'}}> 1 3</span></div>
 </div>
 </div>
 <div className="resultados">
 <div className="jornada">JORNADA <br/><span>3</span></div>
 <div className="partido">
 <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> 6 6</strong></div>
 <div><img className="miniresul" src={minipareja1}/><span style={{color: 'red'}}> 0 1</span></div>
 </div>
 <div className="partido">
 <div><img className="miniresul" src={minipareja2}/><strong style={{color: 'green'}}> 6 6</strong></div>
 <div><img className="miniresul" src={minipareja5}/><span style={{color: 'red'}}> 3 0</span></div>
 </div>
 <div className="partido2">
 <div><img className="miniresul" src={minipareja6}/><strong style={{color: 'green'}}> X X</strong></div>
 <div><img className="miniresul" src={minipareja4}/><span style={{color: 'red'}}> X X</span></div>
 </div>
 </div>
 <div className="resultados">
 <div className="jornada">JORNADA <br/><span>4</span></div>
 <div className="partido">
 <div><img className="miniresul" src={minipareja4}/><strong style={{color: 'green'}}> 4 6 7</strong></div>
 <div><img className="miniresul" src={minipareja1}/><span style={{color: 'red'}}> 6 4 6</span></div>
 </div>
 <div className="partido">
 <div><img className="miniresul" src={minipareja2}/><strong style={{color: 'green'}}> 6 6</strong></div>
 <div><img className="miniresul" src={minipareja6}/><span style={{color: 'red'}}> 3 1</span></div>
 </div>
 <div className="partido2">
 <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> X X</strong></div>
 <div><img className="miniresul" src={minipareja5}/><span style={{color: 'red'}}> X X</span></div>
 </div>
 </div>
 <div className="resultados">
 <div className="jornada">JORNADA <br/><span>5</span></div>
 <div className="partido">
 <div><img className="miniresul" src={minipareja3}/><strong style={{color: 'green'}}> 3 6 6</strong></div>
 <div><img className="miniresul" src={minipareja2}/><span style={{color: 'red'}}> 6 2 4</span></div>
 </div>
 <div className="partido">
 <div><img className="miniresul" src={minipareja1}/><strong style={{color: 'green'}}> X X</strong></div>
 <div><img className="miniresul" src={minipareja6}/><span style={{color: 'red'}}> X X</span></div>
 </div>
 <div className="partido2">
 <div><img className="miniresul" src={minipareja4}/><strong style={{color: 'green'}}> X X</strong></div>
 <div><img className="miniresul" src={minipareja5}/><span style={{color: 'red'}}> X X</span></div>
 </div>
 </div>

 */