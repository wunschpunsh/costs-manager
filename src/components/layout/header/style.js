import styled from 'styled-components';

const StyledHeader = styled.header`
  flex-shrink: 0;
  padding: 50px 0;
  background-color: transparent;
  /* background: url('/leaves.webp') top left; */
  /* box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04),
    0px 0px 1px rgba(0, 0, 0, 0.04); */

  margin-bottom: 50px;
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
`;

const StyledAddButton = styled.button`
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

export {StyledHeader, StyledNav, StyledAddButton};
