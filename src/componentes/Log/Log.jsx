import { Container } from "./styles";

window.onload = function () {
  const contenedor = document.getElementById("ContenedorLog");

  setTimeout(() => {
    contenedor.style.visibility = "hiden";
    contenedor.style.opacity = "0";
    setTimeout(() => {
      contenedor.style.display = "none";
    }, 1000);
  }, 1500);
};
const Log = () => (
  <Container id="ContenedorLog">
    <p id="textLog">Login...</p>
    <div id="circletLog"></div>
  </Container>
);

export default Log;
