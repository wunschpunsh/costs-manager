import {
  StyledBarWrapper,
  StyledBarInner,
  StyledBarFill,
  StyledBarLabel,
} from './style';

export function DiagramBar({value, maxValue, label}) {
  let barHeight = '0%';

  if (maxValue > 0) {
    barHeight = Math.round((value / maxValue) * 100) + '%';
  }

  return (
    <StyledBarWrapper>
      <StyledBarInner>
        <StyledBarFill size={barHeight}></StyledBarFill>
      </StyledBarInner>
      <StyledBarLabel>{label}</StyledBarLabel>
    </StyledBarWrapper>
  );
}
