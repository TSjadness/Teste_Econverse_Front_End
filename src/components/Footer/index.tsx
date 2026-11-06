import logo from '../../assets/images/logo.png';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import { FOOTER_COLUMNS, LOREM } from '../../utils/content';
import { Bottom, Brand, Columns, Content, Gray, Social, Wrapper } from './styles';

const Footer = () => (
  <Wrapper>
    <Gray>
      <Content>
        <Brand>
          <img src={logo} alt="Econverse" loading="lazy" />
          <p>{LOREM}</p>
          <Social>
            <li>
              <a href="#" aria-label="Instagram">
                <img src={instagram} alt="" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Facebook">
                <img src={facebook} alt="" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="LinkedIn">
                <img src={linkedin} alt="" />
              </a>
            </li>
          </Social>
        </Brand>
        <Columns>
          {FOOTER_COLUMNS.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h3>{column.title}</h3>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </Columns>
      </Content>
    </Gray>
    <Bottom>{LOREM}</Bottom>
  </Wrapper>
);

export default Footer;
