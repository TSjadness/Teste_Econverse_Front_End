import { ThemeProvider } from 'styled-components';
import AppRouter from './router';
import { ProductModalProvider } from './context/ProductModalContext';
import { theme } from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <ProductModalProvider>
      <AppRouter />
    </ProductModalProvider>
  </ThemeProvider>
);

export default App;
