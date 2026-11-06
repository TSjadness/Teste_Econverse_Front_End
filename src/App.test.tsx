import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { ProductModalProvider } from './context/ProductModalContext';
import ProductShowcase from './components/ProductShowcase';
import ProductModal from './components/ProductModal';
import { theme } from './styles/theme';

const products = [
  { id: 1, productName: 'Iphone 11 PRO MAX BRANCO 1', descriptionShort: 'Descrição 1', photo: 'a.png', price: 15000 },
  { id: 2, productName: 'IPHONE 13 MINI 1', descriptionShort: 'Descrição 2', photo: 'b.png', price: 9000 },
];

describe('vitrine e modal', () => {
  beforeEach(() => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: true, json: () => Promise.resolve(products) }),
    );
  });

  it('abre o modal com os dados do produto clicado e fecha com Esc', async () => {
    const user = userEvent.setup();

    render(
      <ThemeProvider theme={theme}>
        <ProductModalProvider>
          <ProductShowcase title="Produtos relacionados" withTabs />
          <ProductModal />
        </ProductModalProvider>
      </ThemeProvider>,
    );

    await waitFor(() => expect(screen.getAllByText('Descrição 2').length).toBeGreaterThan(0));

    await user.click(screen.getByRole('button', { name: /Ver detalhes de IPHONE 13 MINI 1/i }));

    const dialog = await screen.findByRole('dialog');
    expect(dialog).toHaveTextContent('IPHONE 13 MINI 1');
    expect(dialog).toHaveTextContent('R$ 9.000,00');

    await user.keyboard('{Escape}');
    await waitFor(() => expect(screen.queryByRole('dialog')).not.toBeInTheDocument());
  });
});
