import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function LoginButton() {
  const auth0Ctx = useAuth0();

  return (
    <div>
      <button
        onClick={() => {
          auth0Ctx.loginWithRedirect();
        }}
      >
        Login
      </button>
    </div>
  );
}

export default LoginButton;
