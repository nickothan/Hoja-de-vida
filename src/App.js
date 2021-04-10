import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="datosBasicos">
                    <div className="img">
                        <img src="" alt="" />
                    </div>
                    <div className="descipcionDatosBasicos">
                        <h1>Sergio Nicolas Ramirez Garcia</h1>
                        <h2>Developer Junior</h2>
                        <div className="infoDatosBasicos">
                            <div className="numeroDatosBasicos">
                                <i class="fas fa-mobile-alt"> +57 3209317494</i>
                                <p></p>
                            </div>
                            <div className="emailDatosBasicos">
                                <i class="fas fa-mail-bulk"> s1nicolasrg@gmail.com</i>
                            </div>
                            <div className="ubicacion">
                                <i class="fas fa-map-marker-alt"> Bogotá D.C - Colombia</i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contenido">
                    <div className="resumen">
                        <div className="tituloResumen">
                            <h2>Resumen</h2>
                        </div>
                        <p>
                            Dinamico en el diseño y desarrollo de paginas web. Buena comunicacion
                            con los clientes. Coordinacion con equipos de trabajo remoto en sistemas
                            de versionamiento git/github. Diseñador de diagramas de flujo para la
                            implementacion de sistemas.
                        </p>
                    </div>
                    <div className="educacion">
                        <h2>Educacion</h2>
                        <ul>
                            <li>
                                <h3 className="institucion">Suramerica Educacion Superior</h3>
                                <p className="fechaEducacion">2018</p>
                                <p className="descripcionEstudio">Entrenamiento en programación</p>
                            </li>
                            <li>
                                <h3 className="institucion">Uniminuto</h3>
                                <p className="fechaEducacion">2017- 2019(aplazado)</p>
                                <p className="descripcionEstudio">
                                    tec. seg. redes y seg. informatica
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="habilidades">
                        <div className="tituloHabilidades">
                            <h2>Habilidades</h2>
                        </div>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>git</li>
                            <li>Jquery</li>
                            <li>Ajax</li>
                        </ul>
                    </div>
                    <div className="sistemasOperativos">
                        <div className="tituloSO">
                            <h2>Sistemas operativos</h2>
                        </div>
                        <ul>
                            <li>Windows</li>
                            <li>Centos</li>
                            <li>Ubuntu</li>
                            <li>Kaly linux</li>
                            <li>Elastix</li>
                        </ul>
                    </div>
                    <footer>
                        <a href="https://github.com/nickothan">
                            <h3>
                                <i class="fab fa-github-square"> nickothan</i>
                            </h3>
                        </a>
                        <a href="https://www.linkedin.com/in/sergio-ramirez-/">
                            <i class="fab fa-linkedin"> Sergio Ramirez</i>
                        </a>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;
