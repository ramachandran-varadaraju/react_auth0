import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LogoutButton() {
  const auth0Ctx = useAuth0();

  return (
    <div>
      <button
        onClick={() => {
          auth0Ctx.logout();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutButton;
