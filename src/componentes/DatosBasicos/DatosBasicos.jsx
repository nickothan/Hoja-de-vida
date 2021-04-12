import "./styles.js";
import {DatosBasicos} from "./styles.js";

export default function Resume() {
    return (
        <DatosBasicos>
            <div className="imgDatosBasicos">
                <img src="" alt="Imagen usuario" />
            </div>
            <div className="descipcionDatosBasicos">
                <div className="titulosPrincipales">
                    <h1>Sergio Nicolas Ramirez Garcia</h1>
                    <h2>Developer Junior</h2>
                </div>
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
        </DatosBasicos>
    );
}
