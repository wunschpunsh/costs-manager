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

const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export {StyledHeader, Nav};
