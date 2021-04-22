import React, { useCallback, useState, useEffect } from "react";

import { Box, Button, Divider, Typography, useTheme } from "@material-ui/core";
import { Add, Remove, RotateLeft } from "@material-ui/icons";

const UseState: React.FC = () => {
  const theme = useTheme();

  /**
   * counter[0] === count
   * counter[1]() === setCount()
   */

  const counter = useState(0);
  const [count, setCount] = useState(() => {
    console.log("console: initialState");

    return 0;
  });

  const handleResetState = useCallback(() => {
    counter[1](0);
    setCount(0);
  }, [counter]);

  const handleSetTimeOutCountE = useCallback(() => {
    setTimeout(() => {
      setCount(count + 10);
    }, 2000);
  }, [count]);

  const handleRemoveCountE = useCallback(() => {
    setCount(count - 100);
  }, [count]);

  const handleSetTimeOutCount = useCallback(() => {
    setTimeout(() => {
      setCount((prev) => prev + 10);
    }, 2000);
  }, []);

  const handleRemoveCount = useCallback(() => {
    setCount((prev) => prev - 100);
  }, []);

  useEffect(() => {
    document.title = "useState";
  }, []);

  return (
    <>
      <Box display="flex" marginY={theme.spacing(0.5)} position="relative">
        <Box display="flex" marginRight={theme.spacing(0.5)}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount((prev) => prev + 1)}
          >
            <Add />
          </Button>
          <Typography variant="h4">{count}</Typography>
        </Box>

        <Box display="flex">
          <Button
            variant="contained"
            color="secondary"
            onClick={() => counter[1](counter[0] + 1)}
          >
            <Add />
          </Button>
          <Typography variant="h4">{counter[0]}</Typography>
        </Box>
      </Box>

      <Divider />

      <Box display="flex" marginY={theme.spacing(0.5)}>
        <Box display="flex" marginRight={theme.spacing(0.5)}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSetTimeOutCountE}
          >
            <Add />
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleRemoveCountE}
          >
            <Remove />
          </Button>
          <Typography variant="h4">{count}</Typography>
        </Box>
      </Box>

      <Box display="flex" marginY={theme.spacing(0.5)}>
        <Box display="flex" marginRight={theme.spacing(0.5)}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSetTimeOutCount}
          >
            <Add />
          </Button>

          <Button
            variant="contained"
            color="secondary"
            onClick={handleRemoveCount}
          >
            <Remove />
          </Button>
          <Typography variant="h4">{count}</Typography>
        </Box>

        <Box position="absolute" right="17vw" bottom="20vh">
          <Button
            variant="contained"
            color="secondary"
            onClick={handleResetState}
          >
            <RotateLeft />
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UseState;
