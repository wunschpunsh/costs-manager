import {
  StyledContentHeader,
  StyledContentHeaderWrapper,
  StyledContentHeaderParagraph,
} from './style';
import {Container} from '../../ui/container/Container';

export function ContentHeader() {
  return (
    <StyledContentHeader>
      <Container>
        <StyledContentHeaderWrapper>
          <StyledContentHeaderParagraph>
            Выбор по году
          </StyledContentHeaderParagraph>
        </StyledContentHeaderWrapper>
      </Container>
    </StyledContentHeader>
  );
}
