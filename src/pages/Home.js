import Post from "./Posts";
import { LoadingContext } from "../context/loading.context";
import { useContext } from "react";

const Home = () => {
  const { user } = useContext(LoadingContext);
  return (
    <div>
      <h1>Home</h1>

      {/* user info on left side */}
      {user && (
        <div>
          <h3>{user.name}</h3>
          {/* style profile pic */}
          <img className="scale-50" src={user.profilePic} alt="profile" />
        </div>
      )}

      <Post />
    </div>
  );
};

export default Home;
