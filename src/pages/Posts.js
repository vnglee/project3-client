import { useState, useEffect, useContext } from "react";
import { LoadingContext } from "../context/loading.context";
import AddPost from "../components/AddPost";
import PostCard from "../components/PostCard";
import Login from "./Login";

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
    <br/>
    <br/>
    <br/>
      {user ? (
        <>
          <AddPost posts={posts} setPosts={setPosts} />
          <br />
          Recent Entries:
          <br />
          <br />
          {posts
            .filter((element) => element.type.includes(search))
            .map((post) => {
              return <PostCard key={post._id} singlePost={post} setLiked={setLiked} />;
            })}
        </>
      ) : (
        ""
      
        
      )}
    </div>
  );
};

export default Posts;
