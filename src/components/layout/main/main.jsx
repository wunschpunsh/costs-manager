import {StyledMain} from './style';
import {ContentHeader} from '../../blocks/content-header/ContentHeader';
import {Costs} from '../../blocks/costs/Costs';
import {Graph} from '../../blocks/graph/Graph';

export function Main({costs}) {
  return (
    <StyledMain>
      <ContentHeader></ContentHeader>
      <Graph></Graph>
      <Costs costs={costs}></Costs>
    </StyledMain>
  );
}
