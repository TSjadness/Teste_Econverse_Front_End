import { ReactNode } from 'react';
import TopBar from '../components/TopBar';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';
import ProductModal from '../components/ProductModal';

const MainLayout = ({ children }: { children: ReactNode }) => (
  <>
    <header>
      <TopBar />
      <Header />
      <NavMenu />
    </header>
    <main>{children}</main>
    <Footer />
    <ProductModal />
  </>
);

export default MainLayout;
