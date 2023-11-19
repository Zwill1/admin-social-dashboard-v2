import Loader from "../../ui/Loader";
import useFetch from "./hooks/useFetch";

export default function IntegrationInstagram() {

    const {data, loading, error } = useFetch("src/components/admin/data/SocialData.json");
    // When getting data, set to "loading".
    if (loading) return <Loader />;

    if (data === null)
        return <div>No data available. Please try again later.</div>;

    // Return error in console if one shows up
    if (error) console.log("there is an error " + error);

  return (
    <>
    <div className="px-6 text-1xl font-bold uppercase">Instagram Information</div>
    <div className="relative overflow-x-auto sm:rounded-lg p-6">
        <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
            <tbody>
                <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
                    <th scope="row" className="px-10 py-4 font-bold text-black whitespace-nowrap dark:text-black">
                    Instagram Name
                    </th>
                    <td className="px-8 py-5">
                    {data[0].instagram_name}
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
                    <th scope="row" className="px-10 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                    Instagram ID
                    </th>
                    <td className="px-8 py-5">
                    {data[0].instagram_id}
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
                    <th scope="row" className="px-10 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                    Instagram Followers
                    </th>
                    <td className="px-8 py-5">
                    {data[0].instagram_followers}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </>
  )
}
