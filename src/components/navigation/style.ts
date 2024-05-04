import styled from "styled-components"
import { Link } from "react-router-dom"
import variaveis from "../../styles/variaveis"
export const ContactDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const DivSearch = styled.div`
  width: 80%;
  display: flex;
`
export const BrandContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 2.5%;
  padding-top: 20px;
  padding-bottom: 10px;
`

export const MainDiv = styled.div`
  padding: 0 15%;
`
export const Input = styled.input`
  width: 100%;
  margin-left: 6px;
  border-radius: 3px;
  border: none;
  margin-right: 4px;
  margin-left: 4px;
  color: ${variaveis.corSecundaria};
  font-weight: bold;
  font-size: 14px;
  padding: 5px;
  &:focus {
    outline-color: ${variaveis.corPrincipal};
  }
`
export const Button = styled.button`
  position: relative;
  border: none;
  border-radius: 5px;
  padding: 5px;
  width: 120px;
  height: 35px;
  background-color: ${variaveis.corPrincipal};
  text-transform: capitalize;
  a,
  & {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  cursor: pointer;

  &:hover {
    background-color: ${variaveis.hoverPrincipal};
  }
  span {
    margin-left: 4px;
  }
`
export const StyledLink = styled(Link)`
  color: ${variaveis.corTexto1};
`
