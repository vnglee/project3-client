import { useContext } from "react";
import { LoadingContext } from "../context/loading.context";

const CommentCard = ({ comments }) => {
  // console.log('this is comments', comments)
  // console.log('this is author', author)
  // const { user } = useContext(LoadingContext);

  return (
    <div>
      {/* <div className="user-profile-pic">
    <img className="rounded-circle float-start"
                    id="profile"
                    src={user.profilePic}
                    style={{width: "10%", padding: "1%"}}
                    alt="profile"/>
    </div> */}

      {comments &&
        comments.map((comment) => {
          return <p>{comment.comment}</p>;
        })}
    </div>
  );
};

export default CommentCard;
