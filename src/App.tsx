import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {
  HomeLayout,
  Landing,
  Error,
  Products,
  SingleProduct,
  Cart,
  Register,
  Login,
  Checkout,
  Orders,
  About,
} from './pages';

import { ErrorElement } from './components';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
      },
      { path: 'about', element: <About />, errorElement: <ErrorElement /> },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        errorElement: <ErrorElement />,
      },
      { path: 'cart', element: <Cart />, errorElement: <ErrorElement /> },
      {
        path: 'orders',
        element: <Orders />,
        errorElement: <ErrorElement />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorElement />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
export default App;
