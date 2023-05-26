import { useContext } from "react";
import { LoadingContext } from "../context/loading.context";

const CommentCard = ({ comments, author }) => {
  // console.log('this is comments', comments)
  // console.log('this is author', author)
  const { user } = useContext(LoadingContext);

  return (
    <div>

      {comments &&
        comments.map((comment) => {
          return <p>{comment.comment}</p>
        })}
        
    </div>
  );
};

export default CommentCard;
