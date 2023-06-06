import {StyledDay, StyledMonth, StyledDate, StyledYear} from './style';

export function Date({data}) {
  return (
    <StyledDate>
      <StyledDay>{data.day}</StyledDay>
      <StyledMonth>{data.month}</StyledMonth>
      <StyledYear>{data.year}</StyledYear>
    </StyledDate>
  );
}
