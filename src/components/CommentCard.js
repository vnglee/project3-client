

const CommentCard = ({comment, author}) => {
  console.log('this is comment', comment)
  console.log('this is author', author)
  return (
    <div>

    {comment && 

    (
      <>

    <h3>{comment.comments}</h3>
    <p>{comment.author.name}</p>
      </>
    )

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