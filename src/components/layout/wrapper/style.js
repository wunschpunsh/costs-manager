import styled from 'styled-components';

const StyledPageWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-height: calc(100 * var(--vh, 1vh));
`;

export {StyledPageWrapper};
