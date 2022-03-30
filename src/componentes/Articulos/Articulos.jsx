import { ArticulosContauler, ArticuloContent } from "./styles";

import { LinkContainerArticle } from "./styles";

import { ReactComponent as LinkIcon } from "../assets/link.svg";

export default function Articulos() {
  return (
    <ArticulosContauler>
      <h2>Articles</h2>
      <ArticuloContent>
        <LinkContainerArticle>
          <LinkIcon />
          <a
            href="https://www.linkedin.com/pulse/creando-un-componente-boton-con-react-typescript-y-sergio-ramirez/?trackingId=zpoDW1jFeq%2FVRAMeRJlYNA%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <span>
              Creando un componente boton con React, Typescript,
              Styled-components y storybook
            </span>
          </a>
        </LinkContainerArticle>
        <p>05-08-2021</p>
      </ArticuloContent>
    </ArticulosContauler>
  );
}
