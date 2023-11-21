import PersonIcon from '@mui/icons-material/Person';
// import SettingsIcon from '@mui/icons-material/Settings';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

import { Link } from "react-router-dom";
import { useAuth } from '../../context/AuthContext';

export default function AccountSideBar() {
  
  const {logout} = useAuth();
  return (
    <>
        <ul>
            <li className='leading-10 py-1 border-b-2 border-gray-600'>
            <Link to="/dashboard"><NotificationsActiveIcon /> Dashboard</Link>
            </li>
            <li className='leading-10 py-1 border-b-2 border-gray-600'>
            <Link to="/profile"><PersonIcon /> Profile</Link>
            </li>
            <li className='leading-10 py-1 border-b-2 border-gray-600'>
            <Link to="/integration"><IntegrationInstructionsIcon /> Integration</Link>
            </li>
            <li className='leading-10 py-1 border-b-2 border-gray-600'>
            <Link to="/" onClick={logout}><LogoutIcon /> Sign Out</Link>
            </li>
        </ul>
    </>
  )
}
