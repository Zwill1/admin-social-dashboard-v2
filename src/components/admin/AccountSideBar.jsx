import { ThemeContext } from '../../Themes/Theme';
import { useContext } from 'react';

import AccountSideBarNav from './AccountSideBarNav';

export default function AccountSideBar() {
  
  // Setting up proper dark mode
  const [{isDark}] = useContext(ThemeContext);
  return (
    <>
        <section className={isDark ? "w-2/12 bg-gray-700 min-h-screen text-white px-14" : "w-2/12 bg-gray-200 min-h-screen text-black px-14"}>
          <div className="pt-10">
            <AccountSideBarNav />
          </div>
        </section>
    </>
  )
}
