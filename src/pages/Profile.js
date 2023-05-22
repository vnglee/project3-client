import { useContext } from "react"
import { LoadingContext } from "../context/loading.context"
import { Link } from "react-router-dom"

const Profile = () => {

    const {user} = useContext(LoadingContext)

  return (
    <div>
    Profile
    {user &&
    <div>
        <h3>{user.name}</h3>
        <img className="scale-50" src={user.profilePic} alt='profile' />

        <Link to={`/profile/${user._id}`}><button>Edit Profile</button></Link>
    </div>
    
    }
    
    
    
    
    </div>
  )
}

export default Profile