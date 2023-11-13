import { useContext } from "react";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../Themes/Theme";
import ProfileSideBar from "./ProfileSideBar";

export default function Profile() {

  const { isAuthenticated } = useAuth();
  console.log("this is the profile page. true or false: " + isAuthenticated);
  const [{theme}] = useContext(ThemeContext);

  return (
    <>
      <section style={{backgroundColor: theme.backgroundColor, color: theme.color}} className="flex">
        <ProfileSideBar />
        {/* <ProfileSettings /> */}
      </section>
    </>
  )
}
