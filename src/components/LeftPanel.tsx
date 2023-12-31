import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { Tab } from "../views/AppView";
import Logout from "./auth/Logout";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";

type LeftPanelProps = {
  tabs: Tab[];
  tabChosen: Tab | undefined;
  setTabChosen: React.Dispatch<React.SetStateAction<Tab | undefined>>;
};

const LeftPanel: FC<LeftPanelProps> = ({ tabs, tabChosen, setTabChosen }) => {
  const { user } = useAuth0();
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      borderRadius={2}
      sx={{ backgroundColor: "#E5E5E5" }}
      height="98vh"
    >
      <Grid item mt="4vh" sx={{ backgroundColor: "E5E5E5" }}>
        <Profile user={user} />
      </Grid>
      <Grid item mt="4vh" mb="4vh">
        {tabs.map((tab, index) => (
          <Box>
            <Button
              sx={{ color: tab.id === tabChosen?.id ? "white" : "black" }}
              onClick={() => setTabChosen(tab)}
            >
              <Typography fontFamily="courier">{tab.name}</Typography>
            </Button>
            {index !== tabs.length - 1 && (
              <Divider sx={{ backgroundColor: "grey" }} />
            )}
          </Box>
        ))}
      </Grid>
      <Grid item position="absolute" bottom="2vh">
        <Logout />
      </Grid>
    </Grid>
  );
};

export default LeftPanel;
