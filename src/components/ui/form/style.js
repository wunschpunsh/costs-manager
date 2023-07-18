import styled from 'styled-components';

const StyledForm = styled.form``;

const StyledFormWrapper = styled.div`
  background-color: #ffccbc;
  padding: 1rem;
  margin: 2rem auto;
  width: 70rem;
  max-width: 95%;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.25);
`;

const StyledActionsWrapper = styled.div`
  text-align: left;
`;

const StyledSubmitBtn = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  background-color: #77a6f7;
  color: #ffffff;
  border-radius: 10px;
  border: none;
  margin-right: 3px;
  transition: opacity 0.6s ease-in;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;
const StyledResetBtn = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: none;
  background-color: #77a6f7;
  color: #ffffff;
  border-radius: 10px;
  margin-right: 3px;
  transition: opacity 0.6s ease-in;

  &:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.5;
  }
`;

export {
  StyledForm,
  StyledFormWrapper,
  StyledActionsWrapper,
  StyledSubmitBtn,
  StyledResetBtn,
};
