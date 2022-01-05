import styled from "styled-components"

import { rotate } from "../shared/Animations/Styles"

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  background-color: #fff5e7;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1.3s;

  p {
    color: royalblue;
    font-size: 24px;
    font-weight: 600;
  }

  div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    display: block;

    width: 100px;
    height: 100px;
    animation: ${rotate} 2s linear infinite;
    border-radius: 100%;
    border: 10px solid #9797fd;
    border-left: 10px solid #dfdfff;
  }
`
