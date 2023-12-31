import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { FC, useState } from "react";
import DailyCheckInSetupDialog from "../components/DailyCheckInSetupDialog";

const DailyCheckInPage: FC = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  return (
    <Grid
      container
      height="98vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {openDialog ? (
        <DailyCheckInSetupDialog onClose={() => setOpenDialog(false)} />
      ) : (
        <Box display="flex" flexDirection="column">
          <Typography>Edit Daily Check In configuration</Typography>
          <Button sx={{ height: "4vh" }} onClick={() => setOpenDialog(true)}>
            SET UP
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default DailyCheckInPage;
