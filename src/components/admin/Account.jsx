import { useContext } from "react";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../Themes/Theme";
import AccountSideBar from "./AccountSideBar";
import AccountSettings from "./AccountSettings";


export default function Account() {

  const { isAuthenticated } = useAuth();
  console.log("this is the profile page. true or false: " + isAuthenticated);
  const [{theme}] = useContext(ThemeContext);

  return (
    <>
      <section style={{backgroundColor: theme.backgroundColor, color: theme.color}} className="flex">
        <AccountSideBar />
        <AccountSettings />
      </section>
    </>
  )
}
