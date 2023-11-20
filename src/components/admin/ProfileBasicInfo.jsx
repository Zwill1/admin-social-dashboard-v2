import { useAuth } from "../../context/AuthContext"
import EditIcon from '@mui/icons-material/Edit';

export default function ProfileBasicInfo() {

  const {user} = useAuth();

  return (
    <>
      <div className="px-6 text-1xl font-bold uppercase">Account Information</div>
      <div className="relative overflow-x-auto sm:rounded-lg p-6">
          <table className="w-full text-sm text-left rtl:text-right text-black dark:text-black">
              <tbody>
                  <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
                      <th scope="row" className="px-10 py-4 font-bold text-black whitespace-nowrap dark:text-black">
                        Full Name
                      </th>
                      <td className="px-8 py-5">
                        {user.fullName}
                      </td>
                      <td className="px-8 py-5">
                        <a href="#"><EditIcon /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
                      <th scope="row" className="px-10 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                        Email Address
                      </th>
                      <td className="px-8 py-5">
                        {user.email}
                      </td>
                      <td className="px-8 py-5">
                        <a href="#"><EditIcon /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
                      <th scope="row" className="px-10 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                        Login Name
                      </th>
                      <td className="px-8 py-5">
                        {user.name}
                      </td>
                      <td className="px-8 py-5">
                        <a href="#"><EditIcon /></a>
                      </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-white dark:border-gray-700">
                      <th scope="row" className="px-10 py-4 font-bold text-gray-900 whitespace-nowrap dark:text-black">
                        Password
                      </th>
                      <td className="px-8 py-5">
                        <input className="disabled:opacity-75" type="password" value="password" disabled/>
                      </td>
                      <td className="px-8 py-5">
                        <a href="#"><EditIcon /></a>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
    </>
  )
}