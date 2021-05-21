import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelopeSquare, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles.js";
import {
    DatosBasicosContainer,
    DBImg,
    DatosBasicosContenido,
    DBTitulos,
    DBContenInfo,
    InfoContainer,
} from "./styles.js";

import IconHV from "../assets/Captura.png";

const infoContact = [
    {
        title: "+57 3209317494",
        icon: faMobileAlt,
    },
    {
        title: "s1nicolasrg@gmail.com",
        icon: faEnvelopeSquare,
    },
    {
        title: "Bogotá D.C - Colombia",
        icon: faMapMarkerAlt,
    },
];

const InfoDatosBaico = ({ datos: { icon, title } }) => {
    return (
        <InfoContainer>
            <FontAwesomeIcon icon={icon} />
            <p>{title}</p>
        </InfoContainer>
    );
};

export default function Resume() {
    return (
        <DatosBasicosContainer>
            <DBImg>
                <img src={IconHV} alt="Imagen usuario" />
            </DBImg>
            <DatosBasicosContenido>
                <DBTitulos>
                    <h1>Sergio Nicolas Ramirez Garcia</h1>
                    <h2>Developer</h2>
                </DBTitulos>

                <DBContenInfo>
                    {infoContact.map((datos) => {
                        //console.log("datos: ", datos);
                        return <InfoDatosBaico key={Math.random() * 10} datos={datos} />;
                    })}
                </DBContenInfo>
            </DatosBasicosContenido>
        </DatosBasicosContainer>
    );
}
