import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { FC } from "react";

const Logout: FC = () => {
  const { logout } = useAuth0();
  return (
    <Button
      sx={{ backgroundColor: "red", color: "white", margin: "2vh" }}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Logout
    </Button>
  );
};

export default Logout;
