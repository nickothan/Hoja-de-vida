import "./App.css";

function App() {
    return (
        <div classNameName="App">
            <div classNameName="container">
                <div className="datosBasicos">
                    <div className="img">
                        <img src="" alt="" />
                    </div>
                    <div className="descipcionDatosBasicos">
                        <h1>Sergio Nicolas Ramirez Garcia</h1>
                        <h2>Developer Junior</h2>
                        <div className="infoDatosBasicos">
                            <div className="numeroDatosBasicos">
                                <p>+57 3209317494</p>
                            </div>
                            <div className="emailDatosBasicos">
                                <p>s1nicolasrg@gmail.com</p>
                            </div>
                            <div className="ubicacion">
                                <p>Bogotá D.C - Colombia</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contenido">
                    <div className="resumen">
                        <div className="tituloResumen">
                            <h3>Resumen</h3>
                        </div>
                        <p>
                            Dinamico en el diseño y desarrollo de paginas web. Buena comunicacion
                            con los clientes. Coordinacion con equipos de trabajo remoto en sistemas
                            de versionamiento git/github. Diseñador de diagramas de flujo para la
                            implementacion de sistemas.
                        </p>
                    </div>
                    <div className="educacion">
                        <h3>Educacion</h3>
                        <ul>
                            <li>
                                <p className="institucion">Suramerica Educacion Superior</p>
                                <p className="fechaEducacion">2018</p>
                                <p className="descripcionEstudio">Entrenamiento en programación</p>
                            </li>
                            <li>
                                <p className="institucion">Uniminuto</p>
                                <p className="fechaEducacion">2017- 2019(aplazado)</p>
                                <p className="descripcionEstudio">
                                    tec. seg. redes y seg. informatica
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="habilidades">
                        <div className="tituloHabilidades">
                            <h3>Habilidades</h3>
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
                            <h3>Sistemas operativos</h3>
                        </div>
                        <ul>
                            <li>Windows</li>
                            <li>Centos</li>
                            <li>Ubuntu</li>
                            <li>Kaly linux</li>
                            <li>Elastix</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
