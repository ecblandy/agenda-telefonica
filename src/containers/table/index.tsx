import { useSelector } from "react-redux"
import DadosTabela from "../../components/dados-tabela"
import * as S from "./style"
import { RootReducer } from "../../store"

const Table = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)

  return (
    <S.Container>
      <S.Table>
        <thead>
          <tr>
            <S.TableTh>id</S.TableTh>
            <S.TableTh>nome completo</S.TableTh>
            <S.TableTh>email</S.TableTh>
            <S.TableTh>telefone</S.TableTh>
            <S.TableTh>Editar/Salvar</S.TableTh>
            <S.TableTh>Remover/Cancelar</S.TableTh>
          </tr>
        </thead>
        <tbody>
          {itens.map(({ id, nomeCompleto, email, tel }) => (
            <DadosTabela
              key={id}
              id={id}
              nomeCompleto={nomeCompleto}
              email={email}
              tel={tel}
            />
          ))}
        </tbody>
      </S.Table>
    </S.Container>
  )
}

export default Table
