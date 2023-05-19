import AddPost from "../components/AddPost"
import Post from "./Post"
import { LoadingContext } from "../context/loading.context"
import { useContext } from "react"

const Home = () => {

  // const {user} = useContext(LoadingContext)
  return (
    <div>
    Home
    {/* user info on left side
    {user &&
    <div>
        <h3>{user.name}</h3>
        style profile pic
        <img src={user.profilePic} alt='profile' />
    </div>
    } */}

    <div>
      Posts

    </div>
    </div>
  )
}

export default Home