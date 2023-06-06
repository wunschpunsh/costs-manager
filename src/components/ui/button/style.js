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
  background-color: #77a6f7;
  color: #ffffff;
  opacity: 1;
  text-transform: uppercase;
  transition: opacity 0.6s ease;

  &:hover,
  &:active {
    opacity: 0.5;
  }

  &:active {
    box-shadow: none;
  }
`;

export {StyledButton};
