import styled from "styled-components"
import variaveis from "../../styles/variaveis"

export const Container = styled.div`
  max-width: 700px;
  width: 50%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${variaveis.corSecundaria};
  border-radius: 10px;
  box-shadow: 0px 2px 4px ${variaveis.boxShadowCadastro};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 80%;
`
export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
`
export const ContainerDivChild = styled(ContainerDiv)`
  flex-direction: column;
  margin-left: 20px;
  width: 100%;
`

export const InputCadastro = styled.input<any>`
  padding: 10px 6px;
  background-color: ${variaveis.corTexto1};
  border: none;
  border-color: ${(props) =>
    props.error ? variaveis.error : variaveis.sucess};
  border-radius: 6px;
  width: 100%;
  color: ${variaveis.corSecundaria};
  &::placeholder {
    color: ${variaveis.corSecundaria};
  }

  &:focus {
    outline: 2px solid
      ${(props) => (props.error ? variaveis.error : variaveis.sucess)};
  }
`
export const LabelCadastro = styled.label<any>`
  color: ${variaveis.corTexto1};
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 14px;
  color: ${(props) => (props.error ? variaveis.error : variaveis.corTexto1)};
`
export const ButtonCadastro = styled.button`
  color: ${variaveis.corTexto1};
  width: 50%;
  height: 30px;
  background-color: ${variaveis.corPrincipal};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  font-style: italic;
  margin-top: 6px;
  &:hover {
    background-color: ${variaveis.hoverPrincipal};
  }
`
export const SpanMessage = styled.span<any>`
  margin-top: 10px;
  text-align: justify;
  visibility: ${(props) => (props.error ? "visibility" : "hidden")};
  color: ${(props) => (props.error ? variaveis.error : variaveis.sucess)};
  font-size: 15px;
`
