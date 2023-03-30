import {StyledHeader, Nav} from './style';
import Container from '../../ui/container/container';
import Button from '../../ui/button/button';
export default function Header() {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Button>Добавить новый расход</Button>
        </Nav>
      </Container>
    </StyledHeader>
  );
}
