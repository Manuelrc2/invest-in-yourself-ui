import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { FC, useState } from "react";

export type Day = {
  key: string;
  label: string;
};

type ToggleDaysProp = {
  daysState: [
    days: Day[],
    setDays: React.Dispatch<React.SetStateAction<Day[]>>
  ];
};

export const DAYS = [
  {
    key: "sunday",
    label: "S",
  },
  {
    key: "monday",
    label: "M",
  },
  {
    key: "tuesday",
    label: "T",
  },
  {
    key: "wednesday",
    label: "W",
  },
  {
    key: "thursday",
    label: "T",
  },
  {
    key: "friday",
    label: "F",
  },
  {
    key: "saturday",
    label: "S",
  },
];

const ToggleDays: FC<ToggleDaysProp> = ({ daysState }) => {
  const [days, setDays] = daysState;
  return (
    <>
      <ToggleButtonGroup
        size="small"
        arial-label="Days of the week"
        value={days}
        onChange={(event, value) => setDays(value)}
      >
        {DAYS.map((day, index) => (
          <ToggleButton key={day.key} value={day} selected={days.includes(day)}>
            {day.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  );
};

export default ToggleDays;
