import styled from 'styled-components';

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 98px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  background-color: #2e9a00;
  color: #ffffff;
  opacity: 1;
  text-transform: uppercase;
  transition: opacity 0.3s ease;

  &:hover,
  &:active {
    opacity: 0.5;
    background-color: #2e9a00;
    box-shadow: inset 0px 4px 0px rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;

export {StyledButton};
