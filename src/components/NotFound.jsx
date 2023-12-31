import { useContext } from "react"
import { ThemeContext } from "../Themes/Theme";
import { Link } from "react-router-dom";

export default function NotFound() {

  const [{isDark}] = useContext(ThemeContext);

  return (
    <>
      <section className={isDark ? "h-screen flex bg-black" : "h-screen flex"}>
        <div className="mx-auto container items-center justify-center flex">
          <div className="text-center px-6">
            <h1 className={isDark ? "font-black text-9xl py-2 text-white" : "font-black text-9xl py-2"}>404</h1>
            <p className={isDark ? "font-semibold text-4xl py-2 text-white" : "font-semibold text-4xl py-2"}>Not Found</p>
            <p className={isDark ? "text-xl py-2 text-white" : "text-xl py-2"}>The resource requested could not be found on this server!</p>
            <button className={isDark ? "bg-white hover:bg-blue-700 text-black font-bold py-2 px-4" : "bg-black hover:bg-blue-700 text-white font-bold py-2 px-4"}>
              <Link to="/">Go Home</Link>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
