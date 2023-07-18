import styled from 'styled-components';

const StyledCostItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  margin: 1rem 0;
  border-radius: 10px;
  background-color: #ffccbc;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.25);
`;

const StyledCostItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-end;
  flex-flow: column;
  justify-content: flex-start;
  flex: 1;
`;
export {StyledCostItem, StyledCostItemDescription};
