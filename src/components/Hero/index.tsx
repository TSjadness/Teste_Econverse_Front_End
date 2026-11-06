import { Content, Cta, Highlight, Section, Title } from './styles';

const Hero = () => (
  <Section aria-labelledby="hero-title">
    <Content>
      <Title id="hero-title">Venha conhecer nossas promoções</Title>
      <Highlight>
        <strong>50% Off</strong> nos produtos
      </Highlight>
      <Cta href="#produtos">Ver produto</Cta>
    </Content>
  </Section>
);

export default Hero;
