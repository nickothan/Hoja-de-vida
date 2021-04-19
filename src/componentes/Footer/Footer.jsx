import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

import {Footer} from "./styles.js";

export default function Resume() {
    return (
        <Footer>
            <a href="https://github.com/nickothan">
                <FontAwesomeIcon icon={faGithub} />
                <h3>nickothan</h3>
            </a>
            <a href="https://www.linkedin.com/in/sergio-ramirez-/">
                <FontAwesomeIcon icon={faLinkedin} />
                <h3>Sergio Ramirez</h3>
            </a>
        </Footer>
    );
}
