import logo from '../../assets/images/logo.png';
import SectionTitle from '../SectionTitle';
import { BRANDS } from '../../utils/content';
import { Brand, List, Section } from './styles';

const Brands = () => (
  <Section aria-labelledby="brands-title">
    <SectionTitle id="brands-title">Navegue por marcas</SectionTitle>
    <List>
      {BRANDS.map((brand) => (
        <li key={brand}>
          <Brand href="#produtos" aria-label="Econverse">
            <img src={logo} alt="Econverse" loading="lazy" />
          </Brand>
        </li>
      ))}
    </List>
  </Section>
);

export default Brands;
