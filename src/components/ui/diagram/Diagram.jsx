import {StyledDiagram} from './style';
import {DiagramBar} from '../diagram-bar/DiagramBar';

export function Diagram({monthCosts}) {
  const monthValueArray = monthCosts.map((item) => item.value);
  const maxMonthCost = Math.max(...monthValueArray);

  return (
    <StyledDiagram>
      {monthCosts.map((item) => (
        <DiagramBar
          key={item.label}
          value={item.value}
          maxValue={maxMonthCost}
          label={item.label}
        ></DiagramBar>
      ))}
    </StyledDiagram>
  );
}
