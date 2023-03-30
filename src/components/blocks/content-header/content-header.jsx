import {
  StyledContentHeader,
  ContentHeaderWrapper,
  ContentHeaderParagraph,
} from './style';
import Container from '../../ui/container/container';
export default function ContentHeader() {
  return (
    <StyledContentHeader>
      <Container>
        <ContentHeaderWrapper>
          <ContentHeaderParagraph>Выбор по году</ContentHeaderParagraph>
        </ContentHeaderWrapper>
      </Container>
    </StyledContentHeader>
  );
}
