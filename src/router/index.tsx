import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Home from '../pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
