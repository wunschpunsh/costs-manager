import styled from 'styled-components';

const StyledBarWrapper = styled.div`
  height: 100%;
  width: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBarInner = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 12px;
  background-color: #ffffff;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const StyledBarFill = styled.div`
  background-color: #00887a;
  width: 100%;
  height: ${(props) => props.size};
  transition: all 0.3s ease-out;
`;

const StyledBarLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
  color: #00887a;
`;

export {StyledBarWrapper, StyledBarInner, StyledBarFill, StyledBarLabel};
