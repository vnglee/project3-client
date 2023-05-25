import { Link } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { LoadingContext } from "../context/loading.context";
import { post } from "../services/authService";

const PostCard = ({ singlePost, setLiked }) => {
  const [commentsArray, setCommentsArray] = useState(post.comments);

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
        <div className="opacity-100">
          <div className="card border-0 shadow my-5">
            <div className="card-body p-3">
              <img
                src={singlePost.image}
                alt=""
                style={{ width: "30%" }}
                className="rounded m-2 float-start"
              />
              <p id="post">{singlePost.post}</p>
              <br />
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
      {/* <div class="card" style={{width: "40rem"}}>
  <img src={singlePost.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}

{/* <Card style={{ width: "30rem", height: "50rem" }}>
        {singlePost.image ? (
          <Card.Img
            variant="top"
            src={singlePost.image}
            width="50%"
            height="50%"
          />
        ) : (
          ""
        )}
        <Card.Body>
          <Card.Text>{singlePost.post}</Card.Text>
          <Card.Body>
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
            <AddComment
              postId={singlePost._id}
              comments={commentsArray}
              setCommentsArray={setCommentsArray}
            />
            <CommentCard comments={commentsArray} />
          </Card.Body>
          {singlePost.author._id === user._id ? (
            <Link to={`/posts/detail/${singlePost._id}`}>
              <Button variant="primary">Edit</Button>
            </Link>
          ) : (
            ""
          )}
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default PostCard;
