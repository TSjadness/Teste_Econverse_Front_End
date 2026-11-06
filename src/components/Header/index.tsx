import { FormEvent } from 'react';
import logo from '../../assets/images/logo.png';
import orders from '../../assets/icons/orders.png';
import heart from '../../assets/icons/heart.png';
import user from '../../assets/icons/user.png';
import cart from '../../assets/icons/cart.png';
import search from '../../assets/icons/search.png';
import { ActionButton, Actions, LogoLink, SearchForm, Wrapper } from './styles';

const Header = () => {
  const handleSubmit = (event: FormEvent) => event.preventDefault();

  return (
    <Wrapper>
      <LogoLink href="/" aria-label="Econverse - página inicial">
        <img src={logo} alt="Econverse" width={117} height={35} />
      </LogoLink>
      <SearchForm role="search" onSubmit={handleSubmit}>
        <input type="search" name="q" placeholder="O que você está buscando?" aria-label="Buscar produtos" />
        <button type="submit" aria-label="Buscar">
          <img src={search} alt="" />
        </button>
      </SearchForm>
      <Actions>
        <ActionButton aria-label="Meus pedidos">
          <img src={orders} alt="" />
        </ActionButton>
        <ActionButton aria-label="Favoritos">
          <img src={heart} alt="" />
        </ActionButton>
        <ActionButton aria-label="Minha conta">
          <img src={user} alt="" />
        </ActionButton>
        <ActionButton aria-label="Carrinho">
          <img src={cart} alt="" />
        </ActionButton>
      </Actions>
    </Wrapper>
  );
};

export default Header;
