import styled from 'styled-components';

const StyledInputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;
const StyledInput = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 21rem;
  max-width: 100%;
`;

export {StyledInputLabel, StyledInput};
