import { useContext } from "react";
import { ThemeContext } from "../Themes/Theme";


export default function Footer() {

  // Setting up proper dark mode
  const [{isDark}] = useContext(ThemeContext);

  return (
    <section className={isDark ? "bg-black text-white p-1" : "bg-gray-100 text-black p-1"}> 
      <p className="text-center">Footer</p>
    </section>
  )
}
