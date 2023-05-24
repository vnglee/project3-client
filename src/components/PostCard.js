import { Link } from "react-router-dom"
import CommentCard from "./CommentCard"
import AddComment from "./AddComment"
import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const PostCard = ({post}) => {

  const [commentsArray, setCommentsArray] = useState(post.comments)

console.log('this is post', post)


  return (

    <div>

<Card style={{ width: '30rem', height: '50rem' }}>
      <Card.Img variant="top" src={post.image} width="50%" height="50%"/>
      <Card.Body>
        <Card.Text>{post.post}</Card.Text>
        <Card.Body>

        <AddComment postId={post._id} comments={commentsArray} setCommentsArray={setCommentsArray}/>
      <CommentCard comments={commentsArray}/>
        </Card.Body>
        <Button variant="primary">Edit</Button>
      </Card.Body>
    </Card>


  {/* {post &&
    
     (
       <>
        <p style={{ maxWidth: "400px" }}>{post.post} </p>
      <p>{post.author.name}</p>
       <img src={post.image} alt=''/>
      <p>Comments:</p>
      <AddComment postId={post._id} comments={commentsArray} setCommentsArray={setCommentsArray}/>
      <CommentCard comments={commentsArray}/>
       <Link to={`/posts/details/${post._id}`}><button>Edit Post</button></Link>
       </>
     )
     } */}
  
  {/* <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
</div>

  )
}

export default PostCard