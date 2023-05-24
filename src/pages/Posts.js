import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../context/loading.context";
import { AuthContext } from "../context/auth.context";
import { get } from "../services/authService";
import AddPost from "../components/AddPost";
import PostCard from "../components/PostCard";
import AddComment from "../components/AddComment";
import EditPosts from "./EditPosts";
import { Link, useParams } from "react-router-dom";

const Posts = () => {
  // const [search, setSearch] = useState("")
  // const [posts, setPosts] = useState([])

  const { search, setSearch, posts, setPosts, getAllPosts, user } =
    useContext(LoadingContext);

    const [liked, setLiked] = useState(false)

  // const {postId} = useParams

  console.log(search);

  useEffect(() => {
    getAllPosts();
    setSearch("");
  }, [liked]);

  return (
    <div>
      {user ? (
        <>
          <AddPost posts={posts} setPosts={setPosts} />
          <br />
          See Posts:
          <br />
          <br />
          {posts
            .filter((element) => element.type.includes(search))
            .map((post) => {
              return <PostCard key={post._id} singlePost={post} setLiked={setLiked} />;
            })}
        </>
      ) : (
        <p></p>
      )}
      <br />

      <br />
      <br />
    </div>
  );
};

export default Posts;
