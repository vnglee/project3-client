import { useContext } from "react"
import { LoadingContext } from "../context/loading.context"

const CommentCard = ({comments}) => {
  console.log('this is comments', comments)
  // console.log('this is author', author)
  const {user} = useContext(LoadingContext)
  
  return (
    <div>
    {/* <div className="user-profile-pic">
    <img src={user.profilePic} alt='profile' />
    </div> */}

    {comments && 


      comments.map((comment) => {
        return (
          <p>{comment.comment}</p>
        )
      })


    }


    </div>
  )
}

export default CommentCard


// {post &&
    
//   (
//     <>
//      <p style={{ maxWidth: "400px" }}>{post.post} </p>
//    <p>{post.author.name}</p>
//     <img src={post.image} alt=''/>
//    <p>Comments:</p>
//    <AddComment/>
//    <CommentCard/>
//     <Link to={`/posts/details/${post._id}`}><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Edit Post</button></Link>
//     </>
//   )
//   }