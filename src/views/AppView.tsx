import { FC, ReactNode, useState } from "react";
import LeftPanel from "../components/LeftPanel";
import DailyCheckInPage from "./DailyCheckInPage";
import { Grid, Typography } from "@mui/material";
import TypingTestChallenge from "../components/TypingTestChallenge";

//"Daily check in" | "Task's schedule"

export type Tab = {
  id: number;
  name: string;
  component: ReactNode;
};

const AppView = () => {
  const [isChallengeFulfilled, setIsChallengeFulfilled] =
    useState<boolean>(false);
  const [tabChosen, setTabChosen] = useState<Tab>();

  const renderChosenComponent = () =>
    tabs.find((tab) => tab.id === tabChosen?.id)?.component;

  const tabs: Tab[] = [
    {
      id: 1,
      name: "Daily check in",
      component: <DailyCheckInPage />,
    },
    {
      id: 2,
      name: "Task's schedule",
      component: (
        <TypingTestChallenge
          isChallengeFulfilledState={[
            isChallengeFulfilled,
            setIsChallengeFulfilled,
          ]}
        />
      ),
    },
  ];

  return (
    <Grid container>
      <Grid item xs={2}>
        <LeftPanel
          tabs={tabs}
          tabChosen={tabChosen}
          setTabChosen={setTabChosen}
        />
      </Grid>
      <Grid item xs={10}>
        {renderChosenComponent()}
      </Grid>
    </Grid>
  );
};

export default AppView;
