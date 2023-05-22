

const PostCard = ({author, post}) => {
  return (
    <div>
    
      <p style={{ maxWidth: "400px" }}>{post} </p>
      <p>{author}</p>
    </div>
  )
}

export default PostCard