import {Day, Month, StyledDate, Year} from './style';

export default function Date({data}) {
  return (
    <StyledDate>
      <Day>{data.day}</Day>
      <Month>{data.month}</Month>
      <Year>{data.year}</Year>
    </StyledDate>
  );
}
