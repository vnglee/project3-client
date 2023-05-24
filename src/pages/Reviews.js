import { useContext, useEffect } from "react";
import { LoadingContext } from "../context/loading.context";
import PostCard from "../components/PostCard";

const Reviews = () => {
  const { posts, search, getAllPosts, setSearch } = useContext(LoadingContext);

  useEffect(() => {
    if (!posts.length) {
      getAllPosts();
      setSearch("review");
    }
  }, []);

  return (
    <div>
      <h1>Reviews</h1>

      <>
        {posts
          .filter((element) => element.type.includes(search))
          .map((post) => {
            return <PostCard key={post._id} singlePost={post} />;
          })}
      </>
    </div>
  );
};

export default Reviews;
