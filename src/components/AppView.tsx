import { FC, ReactNode, useState } from "react";
import LeftPanel from "./LeftPanel";
import DailyCheckIn from "../views/DailyCheckInPage";
import { Grid, Typography } from "@mui/material";

//"Daily check in" | "Task's schedule"

export type Tab = {
  id: number;
  name: string;
  component: ReactNode;
};

const tabs: Tab[] = [
  {
    id: 1,
    name: "Daily check in",
    component: <DailyCheckIn />,
  },
  {
    id: 2,
    name: "Task's schedule",
    component: <DailyCheckIn />,
  },
];

const AppView = () => {
  const [tabChosen, setTabChosen] = useState<Tab>();

  const renderChosenComponent = () =>
    tabs.find((tab) => tab.id === tabChosen?.id)?.component;

  return (
    <Grid display="flex">
      <LeftPanel
        tabs={tabs}
        tabChosen={tabChosen}
        setTabChosen={setTabChosen}
      />
      {renderChosenComponent()}
    </Grid>
  );
};

export default AppView;
