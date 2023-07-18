import {StyledMain} from './style';
import {Costs} from '../../blocks/costs/Costs';

export function Main({costs, showNewCost, setShowNewCost}) {
  return (
    <StyledMain>
      <Costs
        costs={costs}
        showNewCost={showNewCost}
        setShowNewCost={setShowNewCost}
      ></Costs>
    </StyledMain>
  );
}
