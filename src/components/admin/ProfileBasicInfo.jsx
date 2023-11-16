export default function ProfileBasicInfo() {
  return (
    <div className="w-full p-10">
        <h2 className="text-center">Basic Information</h2>
        <table className="table-auto w-full text-black bg-gray-200 border-collapse border border-slate-500">
            <thead>
                <tr>
                <th className="border border-slate-600">Song</th>
                <th className="border border-slate-600">Artist</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border border-slate-600">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                <td className="border border-slate-600">Malcolm Lockyer</td>
                </tr>
                <tr>
                <td className="border border-slate-600">Witchy Woman</td>
                <td className="border border-slate-600">The Eagles</td>
                </tr>
                <tr>
                <td className="border border-slate-600">Shining Star</td>
                <td className="border border-slate-600">Earth, Wind, and Fire</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
