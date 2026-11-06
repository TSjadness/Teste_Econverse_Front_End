import shield from '../../assets/icons/shield.png';
import truck from '../../assets/icons/truck.png';
import creditCard from '../../assets/icons/credit-card.png';
import { Item, Wrapper } from './styles';

const TopBar = () => (
  <Wrapper>
    <Item>
      <img src={shield} alt="" />
      <span>
        Compra <strong>100% segura</strong>
      </span>
    </Item>
    <Item>
      <img src={truck} alt="" />
      <span>
        <strong>Frete grátis</strong> acima de R$ 200
      </span>
    </Item>
    <Item>
      <img src={creditCard} alt="" />
      <span>
        <strong>Parcele</strong> suas compras
      </span>
    </Item>
  </Wrapper>
);

export default TopBar;
