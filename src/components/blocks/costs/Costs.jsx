import {StyledCosts} from './style';
import Container from '../../ui/container/Container';
import CostItem from '../../ui/cost-item/CostItem';
import {CostsContainer} from './style';

export default function Cost({costs}) {
  return (
    <StyledCosts>
      <Container>
        <CostsContainer>
          <CostItem costs={costs}></CostItem>
        </CostsContainer>
      </Container>
    </StyledCosts>
  );
}
