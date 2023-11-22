import { useContext } from "react";
import { useAuth } from "../../context/AuthContext";
import { ThemeContext } from "../../Themes/Theme";
import useFetch from "./hooks/useFetch";
import Loader from "../../ui/Loader";

import AccountSideBar from "./AccountSideBar";
import ProfileHeadBanner from "./ProfileHeadBanner";
import ProfileAvatar from "./ProfileAvatar";
import IntegrationInstagram from "./IntegrationInstagram";
import IntegrationYoutube from "./IntegrationYoutube";
import IntegrationTwitter from "./IntegrationTwitter";
import IntegrationFacebook from "./IntegrationFacebook";

export default function Integration() {

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
        <section style={{backgroundColor: theme.backgroundColor, color: theme.color}} className="lg:flex">
            <AccountSideBar />
            <div className="w-full lg:w-10/12">
                <div className="w-full">
                <ProfileHeadBanner />
                </div>
                <div className="w-full">
                <ProfileAvatar />
                </div>
                <div className="w-full xl:flex mt-10">
                  <div className="w-full xl:w-6/12">
                      <IntegrationInstagram />
                  </div>
                  <div className="w-full xl:w-6/12">
                      <IntegrationYoutube />
                  </div>
                </div>
                <div className="w-full xl:flex mt-10">
                  <div className="w-full xl:w-6/12">
                      <IntegrationTwitter />
                  </div>
                  <div className="w-full xl:w-6/12">
                      <IntegrationFacebook />
                  </div>
                </div>
            </div>
        </section>
    </>
  )
}
