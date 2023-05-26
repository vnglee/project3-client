import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { get } from "../services/authService";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';

const PostDetails = ({ post, image, type }) => {
  const [postDetail, setPostDetail] = useState(null);

  const { id } = useParams();

  const getPost = () => {
    get(`/posts/detail/${id}`)
      .then((results) => {
        console.log("getpost results", results.data);
        setPostDetail(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
    <br/>
    <br/>
    <br/>
    <div className="container">
        <div className="card border-0 shadow my-5">
          <div className="card-body p-3">
      {postDetail && (
        <>
          <img src={postDetail.image} alt="" style={{ width: "30%" }}
                className="rounded m-2 float-start"/>
          <p>{postDetail.post}</p>
          <h6>Category:</h6><p>{postDetail.type}</p>
        </>
      )}

      <Link to={`/posts/edit/${id}`}>
      <Button variant="secondary">Edit Post</Button>
      </Link>
    </div>
    </div>
    </div>
  
    </Col>
    </Row>
    </Container>
  );
};

export default PostDetails;
