import {GlobalStyles} from './style';
import Wrapper from '../layout/wrapper/Wrapper';
import {costsData} from '../../mock/mock';
function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper costs={costsData} />
    </>
  );
}

export default App;
