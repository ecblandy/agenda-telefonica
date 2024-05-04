import styled from "styled-components"
import { TableTh } from "../../containers/table/style"
import variaveis from "../../styles/variaveis"
export const TableTd = styled(TableTh)`
  background-color: ${variaveis.corTexto1};
  color: ${variaveis.corTexto2};
  padding: 0;
  height: 30px;
`
export const InputTable = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  border: none;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  text-transform: capitalize;
  color: ${variaveis.corTexto2};
  height: 100%;
`

export const ButtonRemoveCancel = styled.button`
  background-color: transparent;
  border-radius: 3px;
  cursor: pointer;
  margin: 10px;
  height: 40px;
  width: 40px;
  position: relative;
  border: none;

  &:hover {
    transform: scale(1.03);
  }

  &::before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    transition: 0.3s ease-in-out;
    top: -2px;
    right: -2px;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-radius: 8px;
  }

  &::after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    transition: 0.3s ease-in-out;
    bottom: -2px;
    left: -2px;
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-radius: 8px;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
    border-top: 2px solid ${variaveis.removeButton};
    border-right: 2px solid ${variaveis.removeButton};
  }

  &:hover::after {
    width: 100%;
    height: 100%;
    border-bottom: 2px solid ${variaveis.removeButton2};
    border-left: 2px solid ${variaveis.removeButton2};
  }
`

export const ButtonEditar = styled(ButtonRemoveCancel)`
  &:hover::before {
    border-top: 2px solid ${variaveis.editarButton};
    border-right: 2px solid ${variaveis.editarButton};
  }

  &:hover::after {
    border-bottom: 2px solid ${variaveis.editarButton2};
    border-left: 2px solid ${variaveis.editarButton2};
  }
`
export const ButtonSave = styled(ButtonRemoveCancel)`
  &:hover::before {
    border-top: 2px solid ${variaveis.saveButton2};
    border-right: 2px solid ${variaveis.saveButton2};
  }

  &:hover::after {
    border-bottom: 2px solid ${variaveis.saveButton};
    border-left: 2px solid ${variaveis.saveButton};
  }
`
