import { useContext, useEffect, useState } from "react";
import { LoadingContext } from "../context/loading.context";
import { Link, useParams } from "react-router-dom";

import { get } from "../services/authService";

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
      <br />
      <br />
      <br />
      <h2>Profile</h2>
      {user && (
        <div>
          <h3>{user.name}</h3>
          <img src={user.profilePic} alt="profile" />

          <Link to={`/profile/${user._id}`}>
            <button>Edit Profile</button>
          </Link>
        </div>
      )}

      {thisUser ? (
        <div>
          {thisUser.posts.map((post) => {
            return (
              <div key={post._id}>
                {/* <p>{post.post}</p> */}
                <Link to={`/posts/detail/${post._id}`}>{post.post}</Link>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
};

export default Profile;
