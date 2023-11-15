import { useAuth } from "../../context/AuthContext"

export default function ProfileAvatar() {
  
  const {user} = useAuth();
  console.log("user is " + user.avatar);

  return (
    <>
      <div className="w-full text-center h-26 flex justify-center">
        <img src={user.avatar} className="rounded-full justify-center -m-10" />
      </div>
      <div className="w-full text-center mt-10">
        <p className="font-black">{user.fullName}</p>
        <p className="italic">{user.userId}</p>
      </div>
    </>
  )
}
