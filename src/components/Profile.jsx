import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

function Profile() {
  const { user } = useAuth0();

  return (
    <div>
      <img src={user.picture} alt="user profile" />
      <h2>Name : {user.name}</h2>
      <h4>E-mail : {user.email}</h4>
      <JSONPretty data={user} />
    </div>
  );
}

export default Profile;
