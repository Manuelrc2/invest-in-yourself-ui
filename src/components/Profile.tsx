import { User } from "@auth0/auth0-react";
import { Box, Grid, Typography } from "@mui/material";
import { FC } from "react";

type ProfileProps = {
  user: User | undefined;
};

const Profile: FC<ProfileProps> = ({ user }) => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      borderRadius={5}
      p="2vh"
      sx={{ backgroundColor: "white" }}
      boxShadow={3}
    >
      <Grid item borderRadius={10}>
        <img object-fit="cover" src={user?.picture} />
      </Grid>
      <Typography mt="1vh" fontWeight="bold" fontFamily="courier">
        {user?.given_name}
      </Typography>
    </Grid>
  );
};

export default Profile;
