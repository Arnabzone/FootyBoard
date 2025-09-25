import { MdHome } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';
import { GiWorld } from 'react-icons/gi';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/premier-league-logo.png';

const navItems = [
  { name: 'Home', icon: <MdHome size={40} />, path: '/' },
  { name: 'Teams', icon: <FaUsers size={40} />, path: '/teams' },
  { name: 'Leaderboard', icon: <GiWorld size={40} />, path: '/leaderboard' },
  { name: 'Positions', icon: <MdOutlineLeaderboard size={40} />, path: '/positions' },
  { name: 'Search', icon: <BiSearch size={40} />, path: '/search' },
];

function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  return (
    <div
      className={`fixed z-[999] h-24 w-full flex justify-between items-center px-3 text-xl shadow-md
        ${isLanding ? 'bg-transparent text-white' : 'bg-[#0f0c29] bg-opacity-90 text-white'}
      `}
    >
      <div className="flex flex-col items-center mr-4">
        <img
          src={logo}
          alt="Premier League Logo"
          className="h-12 drop-shadow-md"
        />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-text text-sm">
          Premier League
        </span>
      </div>

      <div className="flex justify-center items-center flex-1 gap-28">
        {navItems.map((item, index) => (
          <Link key={index} to={item.path}>
            <div
              className={`relative group flex flex-col items-center
                ${location.pathname === item.path
                  ? 'text-pink-400'
                  : isLanding
                    ? 'text-white'
                    : 'text-[#e0e0e0]'
                }`}
            >
              <div className="cursor-pointer">{item.icon}</div>
              <span className="absolute bottom-[-1.5rem] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-100">
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="w-4" />
    </div>
  );
}

export default Navbar;
