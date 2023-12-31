import { useAuth0 } from "@auth0/auth0-react";
import AppView from "./views/AppView";
import Login from "./components/auth/Login";

function App() {
  const { isAuthenticated } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);
  return isAuthenticated ? <AppView /> : <Login />;
}

export default App;
