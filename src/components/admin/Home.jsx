//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import SocialImage from "../../assets/images/social-media-integration.png";
import { useContext } from "react";
import { ThemeContext } from "../../Themes/Theme";

export default function Home() {

  const [{isDark}] = useContext(ThemeContext);

  return (
    <>
      <section className={isDark ? "w-full bg-black" : ""}>
        <section className="lg:flex lg:w-10/12 mx-auto lg:flex-row-reverse">
          <div className="w-full lg:w-6/12 pt-5 pb-5 px-10 lg:pt-20 lg:pb-20 lg:px-10">
            <div className="lg:flex justify-center items-center h-full">
            <img src={SocialImage} className="w-full" />
            </div>
          </div>
          <div className={isDark ? "w-full lg:w-6/12 bg-black pt-10 pb-10 px-10 lg:pt-20 lg:pb-20 lg:px-10" : "w-full lg:w-6/12 bg-white pt-10 pb-10 px-10 lg:pt-20 lg:pb-20 lg:px-10"}>
            <p className="font-semibold italic text-blue-400">Social Media Integration</p>
            <h1 className={isDark ? "text-5xl font-bold text-white" : "text-5xl font-bold text-black"}>
              Connect your Social Media with our built in integration tools!
            </h1>
            <p className={isDark ? "py-2 my-2 text-white" : "py-2 my-2 text-black"}>Elevate your online presence and supercharge user engagement with our cutting-edge social media integration app! Seamlessly connect your website to popular platforms like Facebook, Twitter, and Instagram, unlocking a world of benefits for your brand. Amplify your reach effortlessly by empowering users to share your content with their social circles, driving organic traffic and boosting visibility. Foster a thriving online community as visitors interact, share opinions, and participate in discussions directly through their favorite social channels.</p>
            <p className={isDark ? "py-2 my-2 text-white" : "py-2 my-2 text-black"}>Our app not only cultivates a sense of camaraderie but also enhances brand loyalty. Joining forces with social media isn&apos;t just about staying connected—it&apos;s about skyrocketing your digital success. Boost your search engine rankings, capitalize on content relevance, and watch your audience grow. Don&apos;t miss out on the social media revolution—sign up with our integration app today and revolutionize your online experience!</p>
            <div className="flex my-8">
              <div className="w-full lg:w-6/12 text-center lg:text-left">
                <Link to="/login">
                  <button className={isDark ? "bg-white hover:bg-blue-700 text-black font-bold py-2 px-4" : "bg-black hover:bg-blue-700 text-white font-bold py-2 px-4"}>Try it for FREE</button>
                </Link>
              </div>
              <div className="w-full lg:w-6/12 text-center lg:text-left">
                <a href="#learn">
                  <button className={isDark ? "bg-white hover:bg-blue-700 text-black font-bold py-2 px-4" : "bg-black hover:bg-blue-700 text-white font-bold py-2 px-4"}>Learn More</button>
                </a>
              </div>
            </div>
            <h2 className={isDark ? "text-sm text-white text-center lg:text-left" : "text-sm text-black text-center lg:text-left"}>An account is needed to access social media integrations. <Link to="/login" className="font-bold text-blue-500">Get started.</Link></h2>
          </div>
        </section>
      </section>
      <section className={isDark ? "w-full bg-white pt-10 pb-10 px-10 lg:pt-10 lg:pb-10 lg:px-10" : "w-full bg-gray-100 pt-10 pb-10 px-10 lg:pt-10 lg:pb-10 lg:px-10"}>
        <div className="lg:flex lg:w-10/12 mx-auto w-full py-5 px-5 lg:py-10 lg:px-10" id="learn">
          <div className="w-full">
            <p className="font-semibold italic text-blue-400 text-center">Get Real Time Updates & Reports</p>
            <h2 className="text-5xl font-bold text-center">Integration Offered:</h2>
          </div>
        </div>
        <section className="lg:flex">
          <div className="w-full lg:flex lg:w-10/12 mx-auto">
            <div className="lg:w-3/12 instagram-bg-color text-center py-16 text-white">
              <InstagramIcon style={{fontSize: 100}} />
            </div>
            <div className="lg:w-3/12 youtube-bg-color text-center py-16 text-white">
              <YouTubeIcon style={{fontSize: 100}} />
            </div>
            <div className="lg:w-3/12 twitter-bg-color text-center py-16 text-white">
              <TwitterIcon style={{fontSize: 100}} />
            </div>
            <div className="lg:w-3/12 fb-bg-color text-center py-16 text-white">
              <FacebookIcon style={{fontSize: 100}} />
            </div>
          </div>
        </section>
        <section className="w-full pt-10 pb-10 px-10 lg:pt-10 lg:pb-10 lg:px-10">
          <div className="text-center">
            <Link to="/login">
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4">Try it for FREE</button>
            </Link>
          </div>
        </section>
      </section>

    </>
  )
}
