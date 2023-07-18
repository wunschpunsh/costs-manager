import {StyledInputLabel, StyledInput} from './style';

export function Input({title, name, type, onChange, inputValue}) {
  const changeHandler = (evt) => {
    onChange(evt.target.value);
  };

  return (
    <StyledInputLabel>
      {title}
      <StyledInput
        name={name}
        type={type}
        value={inputValue}
        onChange={changeHandler}
        required
      ></StyledInput>
    </StyledInputLabel>
  );
}
