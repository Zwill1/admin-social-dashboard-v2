import { useContext } from "react";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../Themes/Theme";
import AccountSideBar from "./AccountSideBar";
import ProfileHeadBanner from "./ProfileHeadBanner";
import ProfileAvatar from "./ProfileAvatar";

export default function Profile() {

  const { isAuthenticated } = useAuth();
  console.log("this is the profile page. true or false: " + isAuthenticated);
  const [{theme}] = useContext(ThemeContext);

  return (
    <>
      <section style={{backgroundColor: theme.backgroundColor, color: theme.color}} className="flex">
        <AccountSideBar />
        <div className="w-10/12">
          <div className="w-full">
            <ProfileHeadBanner />
          </div>
          <div className="w-full">
            <ProfileAvatar />
          </div>
        </div>
      </section>
    </>
  )
}
