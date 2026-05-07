import './styles/App.css';
import { Outlet } from 'react-router';
import { useAuth } from './hooks/useAuth';
import Navbar from './components/shared/Navbar';

function App() {
  const { user } = useAuth();

  return (
    <div
      className={`font-poppins bg-[#101D25] min-h-screen text-[#E9EDEF] ${user ? 'grid grid-cols-5' : ''}`}
    >
      {user && <Navbar className="col-span-1" />}
      <div className={user ? 'col-span-4' : 'w-full'}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
