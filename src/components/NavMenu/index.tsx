import crown from '../../assets/icons/crown.png';
import { NAV_ITEMS } from '../../utils/content';
import { Nav, NavLink } from './styles';

const NavMenu = () => (
  <Nav aria-label="Principal">
    <ul>
      {NAV_ITEMS.map((item) => (
        <li key={item.label}>
          <NavLink href={item.href} $highlight={item.highlight}>
            {item.icon && <img src={crown} alt="" />}
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </Nav>
);

export default NavMenu;
