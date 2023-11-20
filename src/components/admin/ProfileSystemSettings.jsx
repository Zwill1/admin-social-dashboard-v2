import { useContext } from "react"
import { ThemeContext } from "../../Themes/Theme";

export default function ProfileSystemSettings() {

  const [{isDark}] = useContext(ThemeContext);

  return (
    <>
    <div className="px-6 text-1xl font-bold uppercase">System Settings</div>
      <div className="relative overflow-x-auto sm:rounded-lg p-6">
          <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
              <tbody>
                  <tr className={isDark ? "border-b dark:bg-white dark:border-gray-700" : "border-b dark:bg-gray-200 dark:border-gray-700"}>
                      <th scope="row" className="px-10 py-4 font-bold text-black whitespace-nowrap dark:text-black">
                        Language
                      </th>
                      <td className="px-8 py-5">
                        <select name="cars" disabled>
                            <option value="System Default (English (United States))">System Default (English (United States))</option>
                        </select>
                      </td>
                  </tr>
                  <tr className={isDark ? "border-b dark:bg-white dark:border-gray-700" : "border-b dark:bg-gray-200 dark:border-gray-700"}>
                      <th scope="row" className="px-10 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                        Privacy Settings
                      </th>
                      <td className="px-8 py-5">
                        <a href="#" className='text-blue-800 underline'>Set privacy settings</a>
                      </td>
                  </tr>
                  <tr className={isDark ? "border-b dark:bg-white dark:border-gray-700" : "border-b dark:bg-gray-200 dark:border-gray-700"}>
                      <th scope="row" className="px-10 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                        Global Notification Settings
                      </th>
                      <td className="px-8 py-5">
                        <ul>
                            <li><a href="#" className='text-blue-800 underline'>System notifications</a></li>
                            <li><a href="#" className='text-blue-800 underline'>Email notifications</a></li>
                            <li><a href="#" className='text-blue-800 underline'>Push notifications</a></li>
                        </ul>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </>
  )
}
