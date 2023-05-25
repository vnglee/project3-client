import { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { LoadingContext } from "../context/loading.context";

import { AuthContext } from "../context/auth.context";

import { post } from "../services/authService";
import { fileChange } from "../services/fileChange";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditProfile = () => {
  const { user, setUser } = useContext(LoadingContext);
  const { storeToken } = useContext(AuthContext);

  const navigate = useNavigate();

  const [updatedUser, setUpdatedUser] = useState(null);

  const handleTextChange = (e) => {
    setUpdatedUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    // setButtonDisabled(true)

    fileChange(e)
      .then((response) => {
        console.log(response.data);
        setUpdatedUser((prev) => ({
          ...prev,
          [e.target.name]: response.data.image,
        }));
        // setButtonDisabled(false);
      })
      .catch((err) => {
        // setButtonDisabled(false);
        console.log("Error while uploading the file: ", err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    post(`/users/update/${user._id}`, updatedUser)
      .then((results) => {
        console.log("updated results", results.data);
        storeToken(results.data.authToken);
        setUser(results.data.user);
        navigate("/profile");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setUpdatedUser(user);
  }, [user]);

  return (
    <div>
<br/>
<br/><br/>
<Container className="d-grid h-100" id="login-container">
          {updatedUser ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              id="name"
            name="name"
            type="text"
            value={updatedUser.name}
            onChange={handleTextChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Profile Picture:</Form.Label>
            <Form.Control
              id="profilePic"
            name="profilePic"
            type="file"
            onChange={handleFileChange}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
        ) : (
        <p>Loading...</p>
      )}
      </Container>

      {/* Edit Profile
      {updatedUser ? (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={updatedUser.name}
            onChange={handleTextChange}
          />

          <label htmlFor="profilePic">Profile Picture:</label>
          <input
            id="profilePic"
            name="profilePic"
            type="file"
            onChange={handleFileChange}
          />
          <button type="submit">Update</button>
        </form>
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
};

export default EditProfile;
