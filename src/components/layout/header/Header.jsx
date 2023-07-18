import {StyledHeader, StyledNav, StyledAddButton} from './style';
import {Container} from '../../ui/container/Container';

export function Header({setShowNewCost}) {
  const setShowNewCosthandler = () => {
    setShowNewCost(true);
  };

  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <StyledAddButton onClick={setShowNewCosthandler}>
            Добавить новый расход
          </StyledAddButton>
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}
