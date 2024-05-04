import styled from "styled-components"
import { Link } from "react-router-dom"
import variaveis from "../../styles/variaveis"
export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${variaveis.corPrincipal};
  padding: 20px;

  nav {
    margin-left: 30px;
  }
`
export const BrandDiv = styled.div`
  display: flex;
  align-items: center;

  h1 {
    margin-left: 8px;
    text-transform: capitalize;
  }
`
export const LinkHeader = styled(Link)`
  text-transform: capitalize;
  position: relative;
  font-weight: bold;
  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    transform: scaleX(0);
    height: 3px;
    background-color: ${variaveis.corTexto1};
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: 1;
  }

  &:hover {
    &::after {
      background-color: ${variaveis.error};
      transform: scaleX(1);
    }
  }
`
