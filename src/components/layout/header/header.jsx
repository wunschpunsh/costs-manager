import {StyledHeader, StyledNav} from './style';
import {Container} from '../../ui/container/Container';
import Button from '../../ui/button/Button';
export function Header() {
  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <Button>Добавить новый расход</Button>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}
