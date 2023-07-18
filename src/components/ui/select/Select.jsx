import {StyledSelect, StyledOption} from './style';

export function Select({onSaveSelectChange, defaultValue}) {
  const selectChangeHandler = (evt) => {
    onSaveSelectChange(evt.target.value);
  };

  return (
    <StyledSelect onChange={selectChangeHandler} value={defaultValue}>
      <StyledOption value='2023'>2023</StyledOption>
      <StyledOption value='2022'>2022</StyledOption>
      <StyledOption value='2021'>2021</StyledOption>
      <StyledOption value='2020'>2020</StyledOption>
    </StyledSelect>
  );
}
