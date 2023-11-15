import {
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaMagic,
  FaShoppingCart,
  FaStar,
  FaVoicemail,
} from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../hooks/useCart';

const Dashboard = () => {
  const [cart] = useCart();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          <li>
            <NavLink to={'/dashboard/userHome'}>
              {<FaHome></FaHome>}User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/reservation'}>
              {<FaCalendar></FaCalendar>}Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/cart'}>
              {<FaShoppingCart></FaShoppingCart>}My Cart ({cart?.length})
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/review'}>
              {<FaStar></FaStar>}Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={'/dashboard/bookings'}>
              {<FaList></FaList>}My Bookings
            </NavLink>
          </li>
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to={'/'}>{<FaHome></FaHome>}Home</NavLink>
          </li>
          <li>
            <NavLink to={'/order'}>{<FaMagic></FaMagic>}Menu</NavLink>
          </li>
          <li>
            <NavLink to={'/order'}>{<FaEnvelope></FaEnvelope>}Contact</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
