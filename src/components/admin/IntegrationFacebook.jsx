import { useContext } from "react";
import Loader from "../../ui/Loader";
import useFetch from "./hooks/useFetch";
import { ThemeContext } from "../../Themes/Theme";

export default function IntegrationFacebook() {

    const {data, loading, error } = useFetch("src/components/admin/data/SocialData.json");
    const [{isDark}] = useContext(ThemeContext);
    // When getting data, set to "loading".
    if (loading) return <Loader />;

    if (data === null)
        return <div>No data available. Please try again later.</div>;

    // Return error in console if one shows up
    if (error) console.log("there is an error " + error);

  return (
    <>
        <div className="px-6 text-1xl font-bold uppercase">Facebook Information</div>
        <div className="relative overflow-x-auto sm:rounded-lg p-6">
            <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
                <tbody>
                    <tr className={isDark ? "border-b dark:bg-white dark:border-gray-700" : "border-b dark:bg-gray-200 dark:border-gray-700"}>
                        <th scope="row" className="px-10 py-4 font-bold text-black whitespace-nowrap dark:text-black">
                        Facebook Name
                        </th>
                        <td className="px-8 py-5">
                        {data[0].facebook_name}
                        </td>
                    </tr>
                    <tr className={isDark ? "border-b dark:bg-white dark:border-gray-700" : "border-b dark:bg-gray-200 dark:border-gray-700"}>
                        <th scope="row" className="px-10 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                        Facebook ID
                        </th>
                        <td className="px-8 py-5">
                        {data[0].facebook_id}
                        </td>
                    </tr>
                    <tr className={isDark ? "border-b dark:bg-white dark:border-gray-700" : "border-b dark:bg-gray-200 dark:border-gray-700"}>
                        <th scope="row" className="px-10 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                        Facebook Followers
                        </th>
                        <td className="px-8 py-5">
                        {data[0].facebook_followers}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
     </>
  )
}
