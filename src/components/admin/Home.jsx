//icons
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

export default function Home() {
  return (
    <>
      <section className="lg:flex">
        <div className="w-full lg:w-6/12 bg-gray-800 pt-20 pb-20 px-10">
          <h1 className="text-5xl font-bold text-center text-white">
            Connect your Social Media with our built in integration tools!
          </h1>
          <p className="py-4 my-4 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla non porta enim. Pellentesque ac odio in diam semper molestie nec a quam. Donec tempus mi at eros euismod congue. Maecenas vel cursus libero. Praesent eu fringilla sem, nec vulputate neque. Nulla facilisi. Mauris mattis odio ut cursus faucibus. In in augue gravida, tincidunt sem sit amet, dictum eros. Praesent condimentum, magna at euismod auctor, tortor nisl rutrum lorem, eu blandit magna arcu at quam. Pellentesque ut scelerisque metus. </p>
          <div className="flex mt-4 mb-4">
            <div className="w-full lg:w-6/12 text-white text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Login Now</button>
            </div>
            <div className="w-full lg:w-6/12 text-white text-center">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">Login Now</button>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center text-white">How to use this app.</h2>
        </div>
        <div className="w-full lg:w-6/12 bg-gray-200">
          <div className="lg:flex mt-4 mb-4">
          <img src="https://placehold.co/600x400" className="w-full" />
          </div>
        </div>
      </section>
      <section className="lg:flex">
        <div className="w-full py-20 px-10">
          <h2 className="text-center text-5xl font-bold">Integration Offered:</h2>
        </div>
      </section>
      <section className="lg:flex">
        <div className="w-full lg:flex">
          <div className="lg:w-3/12 instagram-bg-color text-center py-32 text-white">
            <InstagramIcon style={{fontSize: 100}} />
          </div>
          <div className="lg:w-3/12 youtube-bg-color text-center py-32 text-white">
            <YouTubeIcon style={{fontSize: 100}} />
          </div>
          <div className="lg:w-3/12 twitter-bg-color text-center py-32 text-white">
            <TwitterIcon style={{fontSize: 100}} />
          </div>
          <div className="lg:w-3/12 fb-bg-color text-center py-32 text-white">
            <FacebookIcon style={{fontSize: 100}} />
          </div>
        </div>
      </section>
    </>
  )
}
