import { Box, Button, Divider, Typography } from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { FC, useState } from "react";
import ToggleDays, { DAYS, Day } from "./ToggleDays";

type DailyCheckInSetupDialogProps = {
  onClose: () => void;
};

const DailyCheckInSetupDialog: FC<DailyCheckInSetupDialogProps> = ({
  onClose,
}) => {
  const [time, setTime] = useState<Dayjs | null>(dayjs());
  const [days, setDatys] = useState<Day[]>(DAYS.slice(0, -2));
  console.log("days", days);
  return (
    <Box display="flex" flexDirection="column" gap="1vh">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Typography fontFamily="courier">HOUR</Typography>
        <TimePicker value={time} onChange={(newValue) => setTime(newValue)} />
        <Divider />
        <Typography fontFamily="courier">DAYS</Typography>
        <ToggleDays daysState={[days, setDatys]} />
        <Divider />
      </LocalizationProvider>
      <Button onClick={onClose}>Save</Button>
    </Box>
  );
};

export default DailyCheckInSetupDialog;
