import './styles/App.css';
import { Outlet } from 'react-router';
import useAuth from './hooks/useAuth';
import Navbar from './components/shared/Navbar';

function App() {
  const { user } = useAuth();
  return (
    <div className={`font-poppins bg-[#101D25] min-h-screen ${user && 'grid grid-cols-5'}`}>
      {user && <Navbar className="col-span-1" />}
      <Outlet />
    </div>
  );
}

export default App;
