import useAuth from '../../hooks/useAuth';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import NavLink from './NavLink';
import { FaUser } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';

const Navbar = () => {
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  if (!user) return null;

  const handleLogout = () => {
    logoutUser();
    navigate('/login');
  };

  return (
    <nav className="flex flex-col justify-start gap-4 px-8 py-10 bg-[#0BD953] shadow-xl text-white h-screen">
      <NavLink
        route="/"
        content={
          <button className="font-bold text-3xl hover:cursor-pointer flex items-center gap-3">
            <MdMessage className="text-white" size={28} />
            <span>OdinMessage</span>
          </button>
        }
      />

      <div className="flex gap-2 items-center">
        <FaUser className="text-white" size={20} />
        <p className="text-xl font-semibold">{user.username}</p>
      </div>

      <button
        className="mt-auto text-xl font-semibold cursor-pointer hover:underline text-left w-fit"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
