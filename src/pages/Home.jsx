import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useAuth();
  console.log(user);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
        console.log(error.code)
    }
  };
  return (
    <div>
      <div>Welcome!</div>
      <p> {user.email}</p>
      <img>{user.photoUrl}</img>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
