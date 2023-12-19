import { Grid } from "@mui/material";
import { FC } from "react";

type LeftPanelProps = {
  tabs: string[];
};

const LeftPanel: FC<LeftPanelProps> = ({ tabs }) => {
  return (
    <Grid container>
      <Grid item>Photo</Grid>
      <Grid container direction="column">
        {tabs.map((tab) => (
          <Grid item>{tab}</Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default LeftPanel;
