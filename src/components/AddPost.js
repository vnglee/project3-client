import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { post } from "../services/authService";

import CreatableSelect from "react-select/creatable";
import { Textarea } from "@material-tailwind/react";
import { fileChange } from "../services/fileChange";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddPost = ({ posts, setPosts }) => {
  const [addPost, setAddPost] = useState({
    post: "",
    image: "",
    type: "general",
  });

  // console.log("add post", addPost);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setAddPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {

    fileChange(e)
      .then((response) => {
        console.log(response.data);
        setAddPost((prev) => ({
          ...prev,
          [e.target.name]: response.data.image,
        }));
        // e.target.value = null
      })
      .catch((err) => {
 
        console.log("Error while uploading the file: ", err);
      });
  };

  const handleSelectChange = (e) => {
    console.log("this is e", e);
    if (!e) {
      setAddPost((prev) => ({
        post: "",
        image: "",
        type: "",
      }));
    } else {
      setAddPost({
        post: "",
        image: "",
        type: e.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("this is the event", e.target);
    post("/posts/create", addPost)
      .then((results) => {
        console.log("new post", results.data);
        setPosts([results.data, ...posts]);
        setAddPost({
          post: "",
          image: undefined,
          type: "general",
        });
        e.target[2].value = null;
        console.log("posts", posts);
        // navigate('/posts')
        console.log("this is post post", addPost);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const theseOptions = [
    {
      label: "general",
      value: "general",
    },
    {
      label: "recipe",
      value: "recipe",
    },
    {
      label: "review",
      value: "review",
    },
  ];

  return (
    <div>
      <h3>Add Post</h3>

      <Container className="d-grid" id="post-container">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select Category</Form.Label>
            <CreatableSelect
              id="selector"
              isClearable
              value={addPost.type}
              options={theseOptions}
              onChange={handleSelectChange}
            />
            <br/>
            <Form.Label>Post</Form.Label>
            <Form.Control
              as="textarea"
              rows={6}
              type="text"
              name="post"
              value={addPost.post}
              onChange={handleChange}
              placeholder="what's on your mind?"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="file"
              name="image"
              onChange={handleFileChange}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Post
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default AddPost;
