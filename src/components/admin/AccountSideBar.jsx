import { ThemeContext } from '../../Themes/Theme';
import { useContext } from 'react';

import AccountSideBarNav from './AccountSideBarNav';

export default function AccountSideBar() {
  
  // Setting up proper dark mode
  const [{isDark}] = useContext(ThemeContext);
  return (
    <>
        <section className={isDark ? "w-full lg:w-2/12 bg-gray-700 lg:min-h-screen text-white px-8 lg:px-10 2xl:px-14" : "w-full lg:w-2/12 bg-gray-200 lg:min-h-screen text-black px-8 lg:px-10 2xl:px-14"}>
          <div className="pt-2 pb-2 lg:pt-10">
            <AccountSideBarNav />
          </div>
        </section>
    </>
  )
}
