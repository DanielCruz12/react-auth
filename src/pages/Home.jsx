import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Home = () => {

  const {user, logout} = useAuth();
  console.log(user);

  const navigate = useNavigate()
 
  const handleLogout = async()=> {
    await logout();
    navigate('/login')
  }
  return (
    <div>
      <div>Welcome!</div>
      <p> {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
