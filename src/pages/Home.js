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
      {/* <Row className="justify-content-md-center"> */}
      <Row>
        <Col md={{ span: 3, offset: 2 }}>
        <br />
          <br />
          {user && (
            <div className="container" style={{width: "20rem", position: "fixed"}}>
              <div className="card border-0 shadow my-5">
                <div className="card-body p-3">
                  <Link to='/profile'>
                  <img
                    className="rounded-circle"
                    id="profile"
                    style={{width: "100%"}}
                    src={user.profilePic}
                    alt="profile"
                  />
                  </Link>
                  <h3>{user.name}</h3>
        
                </div>
                </div>
              </div>
      
          )}
        </Col>
        <Col md={{ span: 5, offset: 5 }}>
          
          <Post />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
