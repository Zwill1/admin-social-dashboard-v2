import { useAuth } from "../../context/AuthContext"

export default function ProfileAvatar() {
  
  const {user} = useAuth();
  console.log("user is " + user.avatar);

  return (
    <div className="w-full text-center bg-gray-400 h-22 flex justify-center">
      <img src={user.avatar} className="rounded-full justify-center" />
    </div>
  )
}
