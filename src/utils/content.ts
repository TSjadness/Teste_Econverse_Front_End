import tecnologia from '../assets/categories/tecnologia.png';
import supermercado from '../assets/categories/supermercado.png';
import bebidas from '../assets/categories/bebidas.png';
import ferramentas from '../assets/categories/ferramentas.png';
import saude from '../assets/categories/saude.png';
import esportes from '../assets/categories/esportes.png';
import moda from '../assets/categories/moda.png';

export const NAV_ITEMS = [
  { label: 'Todas categorias', href: '#categorias', highlight: false, icon: false },
  { label: 'Supermercado', href: '#categorias', highlight: false, icon: false },
  { label: 'Livros', href: '#categorias', highlight: false, icon: false },
  { label: 'Moda', href: '#categorias', highlight: false, icon: false },
  { label: 'Lançamentos', href: '#produtos', highlight: false, icon: false },
  { label: 'Ofertas do dia', href: '#produtos', highlight: true, icon: false },
  { label: 'Assinatura', href: '#newsletter', highlight: false, icon: true },
];

export const CATEGORIES = [
  { id: 'tecnologia', label: 'Tecnologia', icon: tecnologia, active: true },
  { id: 'supermercado', label: 'Supermercado', icon: supermercado, active: false },
  { id: 'bebidas', label: 'Bebidas', icon: bebidas, active: false },
  { id: 'ferramentas', label: 'Ferramentas', icon: ferramentas, active: false },
  { id: 'saude', label: 'Saúde', icon: saude, active: false },
  { id: 'esportes', label: 'Esportes e Fitness', icon: esportes, active: false },
  { id: 'moda', label: 'Moda', icon: moda, active: false },
];

export const SHOWCASE_TABS = ['Celular', 'Acessórios', 'Tablets', 'Notebooks', 'TVs', 'Ver todos'];

export const BRANDS = ['brand-1', 'brand-2', 'brand-3', 'brand-4', 'brand-5'];

export const FOOTER_COLUMNS = [
  { title: 'Institucional', links: ['Sobre Nós', 'Movimento', 'Trabalhe conosco'] },
  { title: 'Ajuda', links: ['Suporte', 'Fale Conosco', 'Perguntas Frequentes'] },
  { title: 'Termos', links: ['Termos e Condições', 'Política de Privacidade', 'Troca e Devolução'] },
];

export const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
