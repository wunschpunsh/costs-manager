import {StyledDay, StyledMonth, StyledDate, StyledYear} from './style';

export function Date({date}) {
  return (
    <StyledDate>
      <StyledDay>{date.getDate()}</StyledDay>
      <StyledMonth>{date.toLocaleString('ru-RU', {month: 'long'})}</StyledMonth>
      <StyledYear>{date.getFullYear()}</StyledYear>
    </StyledDate>
  );
}
