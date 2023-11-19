import { useContext } from "react";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../Themes/Theme";
import AccountSideBar from "./AccountSideBar";
import ProfileHeadBanner from "./ProfileHeadBanner";
import ProfileAvatar from "./ProfileAvatar";
import useFetch from "./hooks/useFetch";
import Loader from "../../ui/Loader";
import ProfileBasicInfo from "./ProfileBasicInfo";
import ProfileSystemSettings from "./ProfileSystemSettings";

export default function Profile() {

  const { isAuthenticated } = useAuth();
  console.log("this is the profile page. true or false: " + isAuthenticated);
  const [{theme}] = useContext(ThemeContext);


    const {data, loading, error } = useFetch("src/components/admin/data/SocialData.json");
    // When getting data, set to "loading".
    if (loading) return <Loader />;
  
    if (data === null)
      return <div>No data available. Please try again later.</div>;
  
    // Return error in console if one shows up
    if (error) console.log("there is an error " + error);

    console.log("this is the data " + data[0].instagram_name);

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
          <div className="w-full flex mt-10">
            <div className="w-6/12">
              <ProfileBasicInfo />
            </div>
            <div className="w-6/12">
              <ProfileSystemSettings />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
