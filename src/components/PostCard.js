import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import { LoadingContext } from "../context/loading.context";
import { post } from "../services/authService";

const PostCard = ({ singlePost, setLiked }) => {
  const [commentsArray, setCommentsArray] = useState(singlePost.comments);

  const [like, setLike] = useState([]);

  const { user } = useContext(LoadingContext);

  const likePost = () => {
    post("/posts/like", { postId: singlePost._id })
      .then((results) => {
        console.log("likepost results", results.data);
        const newLike = like.map((item) => {
          if (item._id === results._id) {
            return results;
          } else {
            return item;
          }
        });
        setLike(newLike);
        setLiked((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unlikePost = () => {
    post("/posts/unlike", { postId: singlePost._id })
      .then((results) => {
        const newLike = like.map((item) => {
          if (item._id === results._id) {
            return results;
          } else {
            return item;
          }
        });
        setLike(newLike);
        setLiked((prev) => !prev);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("this is single post", singlePost);

  return (
    <div>
      <div className="container">
        <div className="card border-0 shadow my-5">
          <div className="card-body p-3">
            <img
              className="rounded-circle float-start"
              id="profile"
              src={singlePost.author.profilePic}
              style={{ width: "10%", padding: "1%" }}
              alt="profile"
            />
            <h5>{singlePost.author.name}</h5>

            <div className="container">
              <p id="post" className="overflow">
                {singlePost.post}
              </p>
              {singlePost.image ? (
                <img
                  src={singlePost.image}
                  alt=""
                  style={{ width: "15rem", height: "15rem" }}
                  className="rounded m-2 float-start"
                />
              ) : (
                ""
              )}
            </div>

            {singlePost.likes.includes(user._id) ? (
              <Button
                onClick={() => {
                  unlikePost();
                }}
              >
                Unlike
              </Button>
            ) : (
              <Button
                onClick={() => {
                  likePost();
                }}
              >
                Like
              </Button>
            )}
            <div>
              <br />
            </div>
            <hr />
            <AddComment
              postId={singlePost._id}
              comments={commentsArray}
              setCommentsArray={setCommentsArray}
            />
            <CommentCard comments={commentsArray} />
            {singlePost.author._id === user._id ? (
              <Link to={`/posts/detail/${singlePost._id}`}>
                <Button variant="primary">Edit</Button>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
