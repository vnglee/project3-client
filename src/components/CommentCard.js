

const CommentCard = ({author, comment}) => {
  return (
    <div>CommentCard
    
    <h3>{comment}</h3>
    <p>{author}</p>
    </div>
  )
}

export default CommentCard