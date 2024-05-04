import * as S from "./styles"
import Logo from "../../img/desenvolvimento-de-software.png"
const Header = () => {
  return (
    <S.Header>
      <S.BrandDiv>
        <img src={Logo} alt="Img" title="iamsas" />
        <h1>devbook</h1>
      </S.BrandDiv>
      <nav>
        <ul>
          <li>
            <S.LinkHeader to="/">home</S.LinkHeader>
          </li>
        </ul>
      </nav>
    </S.Header>
  )
}
export default Header
