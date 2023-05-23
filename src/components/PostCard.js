import { Link } from "react-router-dom"
import CommentCard from "./CommentCard"
import AddComment from "./AddComment"
import { useState } from "react"

const PostCard = ({post}) => {

  const [commentsArray, setCommentsArray] = useState(post.comments)

console.log('this is post', post)


  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <div className="px-6 py-4">
  {post &&
    
     (
       <>
        <p style={{ maxWidth: "400px" }}>{post.post} </p>
      <p>{post.author.name}</p>
       <img src={post.image} alt=''/>
      <p>Comments:</p>
      <AddComment postId={post._id} comments={commentsArray} setCommentsArray={setCommentsArray}/>
      <CommentCard comments={commentsArray}/>
       <Link to={`/posts/details/${post._id}`}><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Edit Post</button></Link>
       </>
     )
     }
  </div>
  {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
</div>

  )
}

export default PostCard