import {StyledPageWrapper} from './style';
import {Header} from '../header/Header';
import {Main} from '../main/Main';
import {useState} from 'react';

export function Wrapper({costs}) {
  const [showNewCost, setShowNewCost] = useState(false);

  return (
    <StyledPageWrapper>
      <Header setShowNewCost={setShowNewCost}></Header>
      <Main
        costs={costs}
        showNewCost={showNewCost}
        setShowNewCost={setShowNewCost}
      ></Main>
    </StyledPageWrapper>
  );
}
