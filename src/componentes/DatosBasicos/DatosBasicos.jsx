import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileAlt, faEnvelopeSquare, faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

import "./styles.js";
import {DatosBasicos} from "./styles.js";

import IconHV from "../assets/Captura.png";

export default function Resume() {
    return (
        <DatosBasicos>
            <div className="imgDatosBasicos">
                <img src={IconHV} alt="Imagen usuario" />
            </div>
            <div className="descipcionDatosBasicos">
                <div className="titulosPrincipales">
                    <h1>Sergio Nicolas Ramirez Garcia</h1>
                    <h2>Developer Junior</h2>
                </div>
                <div className="infoDatosBasicos">
                    <div className="numeroDatosBasicos">
                        <FontAwesomeIcon icon={faMobileAlt} />
                        <p>+57 3209317494</p>
                    </div>
                    <div className="emailDatosBasicos">
                        <FontAwesomeIcon icon={faEnvelopeSquare} />
                        <p>s1nicolasrg@gmail.com</p>
                    </div>
                    <div className="ubicacionDatosBasicos">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <p>Bogotá D.C - Colombia</p>
                    </div>
                </div>
            </div>
        </DatosBasicos>
    );
}
