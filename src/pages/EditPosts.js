import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { useNavigate } from "react-router-dom";
import { get, post } from "../services/authService";
import axios from "axios";
import { baseUrl } from "../services/baseUrl";
import { fileChange } from "../services/fileChange";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditPosts = () => {
  // const [post, setPost] = useState("")
  // const [image, setImage] = useState("")
  // const [type, setType] = useState("")

  const [edit, setEdit] = useState({
    post: "",
    image: "",
    type: "",
  });

  const { id } = useParams();

  const getPost = () => {
    get(`/posts/detail/${id}`)
      .then((results) => {
        console.log("getpost results", results.data);
        setEdit(results.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    setEdit((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSelectChange = (e) => {
  //   console.log("this is e", e)
  //   if (!e) {
  //     setEdit((prev) => ({
  //       post: "",
  //       image: "",
  //       type: "",
  //     }));
  //   } else {
  //     setEdit({
  //       post: "",
  //       image: "",
  //       type: e.value,
  //     });
  //   }
  // };

  const handleSelectChange = (e) => {
    console.log("this is e", e);
    if (!e) {
      setEdit((prev) => ({ ...prev, type: "" }));
    } else {
      setEdit((prev) => ({ ...prev, type: e.value }));
    }
  };

  const handleFileChange = (e) => {
    // setButtonDisabled(true)

    fileChange(e)
      .then((response) => {
        console.log(response.data);
        setEdit((prev) => ({ ...prev, [e.target.name]: response.data.image }));
        // setButtonDisabled(false);
      })
      .catch((err) => {
        // setButtonDisabled(false);
        console.log("Error while uploading the file: ", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post(`/posts/edit/${id}`, edit)
      .then((results) => {
        console.log("new post", results.data);
        setEdit({ post: "" });
        navigate("/");
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

  const deletePost = () => {
    axios
      .delete(`${baseUrl}/posts/delete/${id}`)
      .then((results) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
<br/>
<br/>
<br/>
<h3>Edit Post</h3>


<Container className="d-grid h-100" id="login-container">
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
    <CreatableSelect
          id="selector"
          isClearable
          options={theseOptions}
          onChange={handleSelectChange}
        />
      <Form.Label>Post</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        type="text"
        name="post"
        value={edit.post}
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

    <Button variant="primary" type="submit" >
      Edit Post
    </Button>
    <br/>
    <br/>
    <Button onClick={deletePost}>Delete Post</Button> 
  </Form>
</Container>
      {/* Edit Posts
      <form onSubmit={handleSubmit}>
        <label>Type:</label>
        <CreatableSelect
          id="selector"
          isClearable
          options={theseOptions}
          onChange={handleSelectChange}
        />

        <label>Post</label>
        <textarea
          name="post"
          value={edit.post}
          onChange={handleChange}
          placeholder="what's on your mind?"
        />

        <label>Image:</label>
        <input type="file" name="image" onChange={handleFileChange} />

        <button type="submit">Submit</button>
      </form>
      <button onClick={deletePost}>Delete Post</button> */}
    </div>
  );
};

export default EditPosts;
