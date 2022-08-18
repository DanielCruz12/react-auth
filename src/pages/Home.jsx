import { useAuth } from "../context/AuthContext";

const Home = () => {
  
  const authContext = useAuth();
  console.log(authContext);
  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export default Home;
