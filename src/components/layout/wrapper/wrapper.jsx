import StyledPageWrapper from './style';
import Header from '../header/header';
import Main from '../main/main';
export default function Wrapper() {
  return (
    <StyledPageWrapper>
      <Header></Header>
      <Main></Main>
    </StyledPageWrapper>
  );
}
