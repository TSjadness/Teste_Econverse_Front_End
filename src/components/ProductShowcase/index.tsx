import { useCallback, useEffect, useId, useRef, useState } from 'react';
import ProductCard from '../ProductCard';
import SectionTitle from '../SectionTitle';
import { ChevronLeft, ChevronRight } from '../Icons';
import { useProducts } from '../../controller/useProducts';
import { useProductModal } from '../../context/ProductModalContext';
import { SHOWCASE_TABS } from '../../utils/content';
import { ProductShowcaseProps } from './type';
import { Arrow, Carousel, Header, Section, Status, Tab, Tabs, Track, ViewAll, Viewport } from './styles';

const ProductShowcase = ({ id, title, withTabs = false }: ProductShowcaseProps) => {
  const headingId = useId();
  const { products, loading, error } = useProducts();
  const { openProduct } = useProductModal();
  const [activeTab, setActiveTab] = useState(SHOWCASE_TABS[0]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);

  const updateArrows = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    setCanPrev(viewport.scrollLeft > 1);
    setCanNext(viewport.scrollLeft + viewport.clientWidth < viewport.scrollWidth - 1);
  }, []);

  useEffect(() => {
    updateArrows();
    window.addEventListener('resize', updateArrows);

    return () => window.removeEventListener('resize', updateArrows);
  }, [updateArrows, products, loading]);

  const scrollByCard = (direction: 1 | -1) => {
    const viewport = viewportRef.current;
    const card = viewport?.querySelector('article');
    if (!viewport || !card) return;

    viewport.scrollBy({ left: direction * (card.clientWidth + 20), behavior: 'smooth' });
  };

  return (
    <Section id={id} aria-labelledby={headingId}>
      <Header>
        <SectionTitle id={headingId}>{title}</SectionTitle>
        {!withTabs && <ViewAll href="#produtos">Ver todos</ViewAll>}
      </Header>
      {withTabs && (
        <Tabs role="tablist" aria-label="Categorias de produtos">
          {SHOWCASE_TABS.map((tab) => (
            <Tab
              key={tab}
              role="tab"
              aria-selected={tab === activeTab}
              $active={tab === activeTab}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Tab>
          ))}
        </Tabs>
      )}
      {loading && <Status role="status">Carregando produtos...</Status>}
      {error && <Status role="alert">Não foi possível carregar os produtos.</Status>}
      {!loading && !error && (
        <Carousel $spaced={!withTabs}>
          <Arrow $side="left" aria-label="Produtos anteriores" disabled={!canPrev} onClick={() => scrollByCard(-1)}>
            <ChevronLeft />
          </Arrow>
          <Viewport ref={viewportRef} onScroll={updateArrows}>
            <Track>
              {products.map((product) => (
                <ProductCard key={product.id} product={product} onSelect={openProduct} />
              ))}
            </Track>
          </Viewport>
          <Arrow $side="right" aria-label="Próximos produtos" disabled={!canNext} onClick={() => scrollByCard(1)}>
            <ChevronRight />
          </Arrow>
        </Carousel>
      )}
    </Section>
  );
};

export default ProductShowcase;
