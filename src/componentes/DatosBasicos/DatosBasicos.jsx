import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelopeSquare, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import "./styles.js";
import { Container, Img, Content, Titulos, ContenInfo, InfoContainer } from "./styles.js";

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
    <Container>
      <Img>
        <img src={IconHV} alt="Imagen usuario" />
      </Img>
      <Content>
        <Titulos>
          <h1>Sergio Nicolas Ramirez Garcia</h1>
          <h2>Developer</h2>
        </Titulos>

        <ContenInfo>
          {infoContact.map((datos) => {
            //console.log("datos: ", datos);
            return <Info key={Math.random() * 10} datos={datos} />;
          })}
        </ContenInfo>
      </Content>
    </Container>
  );
}
