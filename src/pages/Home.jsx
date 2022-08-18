import { useAuth } from "../context/AuthContext";

const Home = () => {

  const {user} = useAuth();
  console.log(user);
  return (
    <div>
      <div>Home</div>
    </div>
  );
};

export default Home;
