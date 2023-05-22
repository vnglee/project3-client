import AddPost from "../components/AddPost"
import Post from "./Post"
import { LoadingContext } from "../context/loading.context"
import { useContext } from "react"

const Home = () => {

  const {user} = useContext(LoadingContext)
  return (
    <div>

<h1 className="text-3xl font-bold underline">
    Home
  </h1>
 
    {/* user info on left side */}
    {user &&
    <div>
        <h3>{user.name}</h3>
        {/* style profile pic */}
        <img src={user.profilePic} alt='profile' />
    </div>
    }

   <Post/>
    </div>
  )
}

export default Home