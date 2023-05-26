import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../context/loading.context";
import { Link, useParams } from "react-router-dom";

import { get } from "../services/authService";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

const Profile = () => {
  const { user } = useContext(LoadingContext);

  const [thisUser, setThisUser] = useState(null);

  const { id } = useParams;

  useEffect(() => {
    if (user) {
      get(`/users/profile/${user._id}`)
        .then((results) => {
          console.log("profile results", results.data);
          setThisUser(results.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <br />
            <h2>Profile</h2>
            {user && (
              <div>
                <h3>{user.name}</h3>
                <img
                  className="rounded-circle"
                  src={user.profilePic}
                  alt="profile"
                  style={{ width: "50%" }}
                />
                <br />
                <br />
                <Link to={`/profile/${user._id}`}>
                  <Button variant="secondary">Edit Profile</Button>
                </Link>
              </div>
            )}
          </Col>

          <Col>
            <br />
            <br />
            <br />
            {thisUser ? (
              <div>
                {thisUser.posts.map((post) => {
                  return (
                    <div className="text-ellipsis--2">
                      <div className="container" style={{ width: "50rem" }}>
                        <div className="d-flex justify-content-center">
                          <div className="card border-0 shadow my-5">
                            <div className="card-body p-5">
                              <div key={post._id}>
                                <Link  style={{ textDecoration: 'none', color: "black" }} to={`/posts/detail/${post._id}`}>
                                  {post.post}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>No posts</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;
