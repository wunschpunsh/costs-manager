import {StyledHeader, Nav} from './style';
import Container from '../../ui/container/Container';
import Button from '../../ui/button/Button';
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
