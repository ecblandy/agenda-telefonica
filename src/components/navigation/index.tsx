import * as S from "./style"
import Contato from "../../img/agenda.png"
import AddUser from "../../img/adicionar-usuario.png"
import Search from "../../img/big-search-len.png"
const Navigation = () => {
  return (
    <S.MainDiv>
      <S.BrandContact>
        <img src={Contato} alt="" />
        <h2>contatos</h2>
      </S.BrandContact>
      <S.ContactDiv>
        <S.Button type="button">
          <S.StyledLink to="/cadastro">
            <img src={AddUser} alt="" />
            <span>add contato</span>
          </S.StyledLink>
        </S.Button>
        <S.DivSearch>
          <S.Input type="text" name="" id="" />
          <S.Button>
            <img src={Search} alt="" />
            <span>search</span>
          </S.Button>
        </S.DivSearch>
      </S.ContactDiv>
    </S.MainDiv>
  )
}

export default Navigation
