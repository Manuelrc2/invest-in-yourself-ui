import { Box, Button, Grid } from "@mui/material";
import { FC } from "react";
import { Tab } from "./AppView";

type LeftPanelProps = {
  tabs: Tab[];
  tabChosen: Tab | undefined;
  setTabChosen: React.Dispatch<React.SetStateAction<Tab | undefined>>;
};

const LeftPanel: FC<LeftPanelProps> = ({ tabs, tabChosen, setTabChosen }) => {
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      borderRadius={10}
      sx={{ backgroundColor: "black" }}
      md={2}
    >
      <Grid item height="10vh" width="10vh" borderRadius={10} mt="4vh">
        <img
          object-fit="cover"
          width="100%"
          src="https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
        />
      </Grid>
      <Grid item borderRadius={1} mt="4vh" mb="4vh" padding="4vh">
        {tabs.map((tab) => (
          <Box>
            <Button
              sx={{ color: tab.id === tabChosen?.id ? "grey" : "white" }}
              onClick={() => setTabChosen(tab)}
            >
              {tab.name}
            </Button>
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default LeftPanel;
