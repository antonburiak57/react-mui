import { Navigate, useRoutes } from 'react-router-dom';
import DashboardLayout from './layouts/dashboard';
import MainLayout from './layouts/main';
import DashboardAppPage from './pages/DashboardAppPage';
import ListPage from './pages/ListPage';

export default function Router() {
  const routes = useRoutes([
    {
      path: '',
      children: [
        { element: <Navigate to="/dashboard" />, index: true }
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        
      ],
    },
    {
      path: '/mylist',
      element: <MainLayout />,
      children: [
        { element: <Navigate to="/mylist/app" />, index: true },
        { path: 'app', element: <ListPage /> },
        
      ],
    }
  ]);

  return routes;
}
