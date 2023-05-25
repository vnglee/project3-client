import { useContext, useEffect } from "react";
import { LoadingContext } from "../context/loading.context";
import PostCard from "../components/PostCard";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Recipes = () => {
  const { posts, search, getAllPosts, setSearch } = useContext(LoadingContext);

  useEffect(() => {
    if (!posts.length) {
      getAllPosts();
      setSearch("recipe");
    }
  }, []);

  return (
    <Container>
    <Row>
    <Col>
    <div>
    <br/>
    <br/>
    <br/>
      <h1>Recipes</h1>

      <>
        {posts
          .filter((element) => element.type.includes(search))
          .map((post) => {
            return <PostCard key={post._id} singlePost={post} />;
          })}
      </>
    </div>
    </Col>
    </Row>
    </Container>
  );
};

export default Recipes;
