import styled from 'styled-components';

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #00887a;
  color: #fefae1;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const Month = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

const Year = styled.div`
  font-size: 0.75rem;
`;

const Day = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
export {StyledDate, Month, Year, Day};
