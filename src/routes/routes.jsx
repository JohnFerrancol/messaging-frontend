import App from '../App';
import AuthRoute from './AuthRoute';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';
import Navbar from '../components/shared/Navbar';

const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <AuthRoute>
            <HomePage />
          </AuthRoute>
        ),
      },
      { path: 'register', element: <RegisterPage /> },
      { path: 'login', element: <LoginPage /> },
    ],
  },
];

export default routes;
