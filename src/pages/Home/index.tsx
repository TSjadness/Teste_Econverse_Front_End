import Hero from '../../components/Hero';
import Categories from '../../components/Categories';
import ProductShowcase from '../../components/ProductShowcase';
import PartnerBanners from '../../components/PartnerBanners';
import Brands from '../../components/Brands';
import Newsletter from '../../components/Newsletter';
import { Block } from './styles';

const Home = () => (
  <>
    <Hero />
    <Categories />
    <Block $top="92px" id="produtos">
      <ProductShowcase title="Produtos relacionados" withTabs />
    </Block>
    <Block $top="88px">
      <PartnerBanners />
    </Block>
    <Block $top="96px">
      <ProductShowcase title="Produtos relacionados" />
    </Block>
    <Block $top="84px">
      <PartnerBanners />
    </Block>
    <Block $top="99px">
      <Brands />
    </Block>
    <Block $top="96px">
      <ProductShowcase title="Produtos relacionados" />
    </Block>
    <Block $top="85px">
      <Newsletter />
    </Block>
  </>
);

export default Home;
