import { Link, useParams } from "react-router-dom"

const PostCard = ({post}) => {
console.log(post)
  return (
    <div>
    
   
    {post &&
    
    (
      <>
        <p style={{ maxWidth: "400px" }}>{post.post} </p>
      <p>{post.author.name}</p>
      <img src={post.image} alt=''/>

      <Link to={`/posts/details/${post._id}`}><button>Edit Post</button></Link>
      </>
    )
    }
      
      
      
      
   
    
    
    
    </div>
  )
}

export default PostCard