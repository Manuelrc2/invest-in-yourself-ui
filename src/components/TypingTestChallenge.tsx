import { Button, Grid, TextField, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";

type TypingTestChallengeProps = {
  isChallengeFulfilledState: [
    isChallengeFulfilled: boolean,
    setIsChallengeFulfilled: React.Dispatch<React.SetStateAction<boolean>>
  ];
};

const TypingTestChallenge: FC<TypingTestChallengeProps> = ({
  isChallengeFulfilledState: [isChallengeFulfilled, setIsChallengeFulfilled],
}) => {
  const [splitedMessage, setSplitedMessage] = useState<string[] | undefined>();
  const [currentMessageWords, setCurrentMessageWords] = useState<
    string[] | undefined
  >([]);
  const [textFieldValue, setTextFieldValue] = useState<string>();
  const [wordIndex, setWordIndex] = useState<number>(0);
  useEffect(() => {
    if (splitedMessage && textFieldValue === splitedMessage[wordIndex]) {
      setCurrentMessageWords((prev) => {
        // wordIndex - 1 in the case wordIndex is actually updated to the next value before next component render
        // If this is a problem in the future, let them be doubled
        if (
          prev &&
          currentMessageWords &&
          prev[prev?.length - 1] !== splitedMessage[wordIndex]
        ) {
          const prevExpansion = prev;
          prevExpansion?.push(splitedMessage[wordIndex]);
          return prevExpansion;
        }
        return prev;
      });
      setWordIndex((prev) => prev + 1);
      setTextFieldValue("");
    }
  }, [textFieldValue]);

  const getResponse = async () => {
    const response = await fetch(
      "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=tOcnm4S3sTNrg8Xc9y8bQ44WclwoEtEe",
      {
        method: "GET",
      }
    );

    return await response.json();
  };

  return (
    <Grid
      container
      height="98vh"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item width="30vh" mb="4vh">
        {splitedMessage?.map((word, index) => (
          <Typography
            display="inline"
            sx={{
              userSelect: "none",
              color: index < wordIndex ? "lightgrey" : "black",
            }}
          >
            {word}
          </Typography>
        ))}
      </Grid>
      <Grid item>
        <TextField
          value={textFieldValue}
          onChange={(event) => setTextFieldValue(event.target.value)}
        />
      </Grid>
      <Grid item>
        <Button
          onClick={async () =>
            await getResponse().then((data) =>
              setSplitedMessage(
                data.results[Math.floor(Math.random() * 37)].abstract
                  .split(" ")
                  .map((word: string) => word.replace("’", "'") + " ")
              )
            )
          }
        >
          GET MESSAGE
        </Button>
      </Grid>
    </Grid>
  );
};

export default TypingTestChallenge;
