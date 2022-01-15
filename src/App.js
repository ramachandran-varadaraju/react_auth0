import "./App.css";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const auth0Ctx = useAuth0();

  if (auth0Ctx.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {!auth0Ctx.isAuthenticated && <LoginButton />}
      {auth0Ctx.isAuthenticated && <LogoutButton />}
      {auth0Ctx.isAuthenticated && <Profile />}
    </div>
  );
}

export default App;
