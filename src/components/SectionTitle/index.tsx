import { SectionTitleProps } from './type';
import { Heading, Wrapper } from './styles';

const SectionTitle = ({ id, children }: SectionTitleProps) => (
  <Wrapper>
    <Heading id={id}>{children}</Heading>
  </Wrapper>
);

export default SectionTitle;
