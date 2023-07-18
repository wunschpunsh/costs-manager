import styled from 'styled-components';

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #00887a;
  color: #ffffff;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const StyledMonth = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

const StyledYear = styled.div`
  font-size: 0.75rem;
`;

const StyledDay = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
export {StyledDate, StyledMonth, StyledYear, StyledDay};
