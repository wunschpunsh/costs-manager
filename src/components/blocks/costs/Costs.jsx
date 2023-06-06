import {StyledCosts, StyledCostsContainer} from './style';
import {Container} from '../../ui/container/Container';
import {CostItem} from '../../ui/cost-item/CostItem';

export function Costs({costs}) {
  return (
    <StyledCosts>
      <Container>
        <StyledCostsContainer>
          <CostItem costs={costs}></CostItem>
        </StyledCostsContainer>
      </Container>
    </StyledCosts>
  );
}
