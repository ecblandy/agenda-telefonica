import { salvar, remover } from "../../store/redux/contatos-reducer"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { Contato } from "../../store/redux/contatos-reducer"

import imgSalvar from "../../img/salvar.png"
import imgCancelar from "../../img/cancelar.png"
import imgEditar from "../../img/editar.png"
import imgRemover from "../../img/lixo.png"
import * as S from "./style"

const DadosTabela = ({ id, nomeCompleto, email, tel }: Contato) => {
  const [estaEditando, setEditando] = useState(false)
  const [nomeAtual, setNome] = useState("")
  const [emailAtual, setEmail] = useState("")
  const [telAtual, setTelefone] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    if (nomeCompleto.length > 0) {
      setNome(nomeCompleto)
    }
    if (email.length > 0) {
      setEmail(email)
    }

    if (tel.length > 0) {
      setTelefone(tel)
    }
  }, [nomeCompleto, email, tel])

  function handleEditClick() {
    setEditando(true)
  }

  function handleSaveClick() {
    setEditando(false)
    const contatoAtualizado: Contato = {
      id,
      nomeCompleto: nomeAtual,
      email: emailAtual,
      tel: telAtual
    }
    dispatch(salvar(contatoAtualizado))
  }

  function handleCancelClick() {
    setEditando(false)
    setNome(nomeCompleto)
  }

  function handleRemoveClick(contato: Contato) {
    dispatch(remover(contato))
  }

  return (
    <tr key={id}>
      <S.TableTd>{id}</S.TableTd>
      <S.TableTd>
        <S.InputTable
          disabled={!estaEditando}
          value={nomeAtual}
          type="text"
          onChange={({ target }) => setNome(target.value)}
        />
      </S.TableTd>
      <S.TableTd>
        <S.InputTable
          disabled={!estaEditando}
          value={emailAtual}
          type="email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </S.TableTd>
      <S.TableTd>
        <S.InputTable
          disabled={!estaEditando}
          value={telAtual}
          type="tel"
          onChange={({ target }) => setTelefone(target.value)}
        />
      </S.TableTd>

      {estaEditando ? (
        <>
          <S.TableTd>
            <S.ButtonSave onClick={() => handleSaveClick()}>
              <img src={imgSalvar} />
            </S.ButtonSave>
          </S.TableTd>
          <S.TableTd>
            <S.ButtonRemoveCancel onClick={() => handleCancelClick()}>
              <img src={imgCancelar} alt="" />
            </S.ButtonRemoveCancel>
          </S.TableTd>
        </>
      ) : (
        <>
          <S.TableTd>
            <S.ButtonEditar onClick={() => handleEditClick()}>
              <img src={imgEditar} />
            </S.ButtonEditar>
          </S.TableTd>
          <S.TableTd>
            <S.ButtonRemoveCancel
              onClick={() =>
                handleRemoveClick({ id, nomeCompleto, email, tel })
              }
            >
              <img src={imgRemover} alt="" />
            </S.ButtonRemoveCancel>
          </S.TableTd>
        </>
      )}
    </tr>
  )
}
export default DadosTabela
