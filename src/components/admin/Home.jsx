//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
import SocialImage from "../../assets/images/social-media-integration.jpg";

export default function Home() {
  return (
    <>
      <section className="lg:flex lg:w-10/12 mx-auto lg:flex-row-reverse">
        <div className="w-full lg:w-6/12 pt-5 pb-5 px-10 lg:pt-20 lg:pb-20 lg:px-10">
          <div className="lg:flex justify-center items-center h-full">
          <img src={SocialImage} className="w-full" />
          </div>
        </div>
        <div className="w-full lg:w-6/12 bg-white pt-10 pb-10 px-10 lg:pt-20 lg:pb-20 lg:px-10">
          <p className="font-black text-blue-400">Social Media Integration</p>
          <h1 className="text-5xl font-bold text-black">
            Connect your Social Media with our built in integration tools!
          </h1>
          <p className="py-4 my-4 text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non porta enim. Pellentesque ac odio in diam semper molestie nec a quam. Donec tempus mi at eros euismod congue. Maecenas vel cursus libero. Praesent eu fringilla sem, nec vulputate neque. Nulla facilisi. Mauris mattis odio ut cursus faucibus. In in augue gravida, tincidunt sem sit amet, dictum eros. Praesent condimentum, magna at euismod auctor, tortor nisl rutrum lorem, eu blandit magna arcu at quam. Pellentesque ut scelerisque metus. </p>
          <div className="flex my-8">
            <div className="w-full lg:w-6/12 text-center">
              <Link to="/login">
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4">Try it for FREE</button>
              </Link>
            </div>
            <div className="w-full lg:w-6/12 text-center">
              <a href="#learn">
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4">Learn More</button>
              </a>
            </div>
          </div>
          <h2 className="text-sm text-black text-center lg:text-left">An account is needed to access social media integrations. <Link to="/login" className="font-bold text-blue-500">Get started.</Link></h2>
        </div>
      </section>
      <section className="w-full bg-gray-100 pt-10 pb-10 px-10 lg:pt-10 lg:pb-10 lg:px-10">
        <div className="lg:flex lg:w-10/12 mx-auto w-full py-5 px-5 lg:py-10 lg:px-10" id="learn">
          <div className="w-full">
            <p className="font-black text-blue-400 text-center">Get Real Time Updates & Reports</p>
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
