import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeSquare,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.js";
import {
  DatosBasicosContainer,
  Img,
  Content,
  Titulos,
  ContenInfo,
  InfoContainer,
} from "./styles.js";

import IconHV from "../assets/Captura.png";

const infoContact = [
  {
    title: "s1nicolasrg@gmail.com",
    icon: faEnvelopeSquare,
  },
  {
    title: "Bogotá D.C - Colombia",
    icon: faMapMarkerAlt,
  },
];

const Info = ({ datos: { icon, title } }) => {
  return (
    <InfoContainer>
      <FontAwesomeIcon icon={icon} />
      <p>{title}</p>
    </InfoContainer>
  );
};

export default function DatosBasicos() {
  return (
    <DatosBasicosContainer>
      <Img>
        <img src={IconHV} alt="Imagen usuario" />
      </Img>
      <Content>
        <Titulos>
          <h1>Sergio Nicolas Ramirez Garcia</h1>
          <h2>Developer</h2>
        </Titulos>

        <ContenInfo>
          {infoContact.map((datos) => (
            <Info key={Math.random() * 10} datos={datos} />
          ))}
        </ContenInfo>
      </Content>
    </DatosBasicosContainer>
  );
}
