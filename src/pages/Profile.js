import { useContext, useEffect, useState } from "react"
import { LoadingContext } from "../context/loading.context"
import { Link, useParams } from "react-router-dom"

import { get } from "../services/authService"

const Profile = () => {

    const {user} = useContext(LoadingContext)

    const [thisUser, setThisUser] = useState(null)

    const {id} = useParams

    useEffect(() => {
      if (user) {
        get(`/users/profile/${user._id}`)
          .then((results) => {
            console.log('profile results', results.data)
            setThisUser(results.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }, [user])

  return (
    <div>
    Profile
    {user &&
    <div>
        <h3>{user.name}</h3>
        <img src={user.profilePic} alt='profile' />
    
        <Link to={`/profile/${user._id}`}><button>Edit Profile</button></Link>
    </div>
    
    }

    {thisUser ?

      <div>

      {
        thisUser.posts.map((post) => {
          return (
            <div>
              <p>{post.post}</p>
        
            </div>
          )
        })
      }


      </div>

      :

      <p>No posts</p>

    }
    
    
    
    
    </div>
  )
}

export default Profile