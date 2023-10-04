import { StyledHeader } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <h1 className="logo">
        <a href="/">BestDilly</a>
      </h1>
      {/* <div className="util">
        <a href="#">로그인</a>
        <a href="#">회원가입</a>
      </div> */}
    </StyledHeader>
  );
};

export default Header;
