import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { FC } from "react";

const Login: FC = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()}>Login</Button>;
};

export default Login;
