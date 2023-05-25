import Post from "./Posts";
import { LoadingContext } from "../context/loading.context";
import { useContext } from "react";
import AddPost from "../components/AddPost";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Home = ({ setPosts, thisUser }) => {
  const { user, posts } = useContext(LoadingContext);
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 5 }}>
          <br />
          <br />
          <br />
          {user && (
            <div className="container" style={{width: "20rem"}}>
              <div className="card border-0 shadow my-5">
                <div className="card-body p-5">
                  <h3>{user.name}</h3>

                  <img
                    className="rounded"
                    id="profile"
                    src={user.profilePic}
                    alt="profile"
                  />
                    {thisUser ? (
        <div>
          {thisUser.posts.map((post) => {
            return (
              <div key={post._id}>
                <Link to={`/posts/detail/${post._id}`}>{post.post}</Link>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No posts</p>
      )}
                </div>
              </div>
            </div>
          )}
        </Col>
        <Col md={{ span: 6 }}>
          <br />
          <br />
          <br />
          <Post />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
