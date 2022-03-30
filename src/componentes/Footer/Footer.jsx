import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { FooterContainer } from "./styles.js";

export default function Footer() {
  return (
    <FooterContainer>
      <a target="_blank" rel="noreferrer" href="https://github.com/nickothan">
        <FontAwesomeIcon icon={faGithub} />
        <span>nickothan</span>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/sergio-ramirez-/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
        <span>Sergio Ramirez</span>
      </a>
    </FooterContainer>
  );
}
