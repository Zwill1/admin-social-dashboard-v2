import { useAuth } from "../../context/AuthContext";

export default function Profile() {

  const { isAuthenticated } = useAuth();
  console.log("this is the profile page. true or false: " + isAuthenticated);
  return (
    <div>Profile</div>
  )
}
