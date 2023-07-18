import {GlobalStyles} from './style';
import {Wrapper} from '../layout/wrapper/Wrapper';
import {costsData} from '../../mock/mock';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Wrapper costs={costsData} />
    </>
  );
}
