import {StyledMain} from './style';
import ContentHeader from '../../blocks/content-header/content-header';

import Cost from '../../blocks/cost/cost';
import Graph from '../../blocks/graph/graph';
export default function Main() {
  return (
    <StyledMain>
      <ContentHeader></ContentHeader>
      <Graph></Graph>
      <Cost></Cost>
    </StyledMain>
  );
}
