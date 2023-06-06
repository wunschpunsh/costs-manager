import {StyledPageWrapper} from './style';
import {Header} from '../header/Header';
import {Main} from '../main/Main';
export function Wrapper({costs}) {
  return (
    <StyledPageWrapper>
      <Header></Header>
      <Main costs={costs}></Main>
    </StyledPageWrapper>
  );
}
