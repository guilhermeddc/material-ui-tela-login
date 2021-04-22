import React, { useState, useEffect } from "react";

import { Box, Button, Divider, Typography, useTheme } from "@material-ui/core";
import { Add, Remove, RotateLeft } from "@material-ui/icons";

const UseEffect: React.FC = () => {
  const theme = useTheme();
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Guilherme");

  console.log("RENDER");

  /**
   * Renderiza uma unica vez
   */

  useEffect(() => {
    console.log("useEffect: RENDER");

    document.title = "useEffect";
  }, []);

  /**
   * Renderiza com qualquer modificação
   */

  // useEffect(() => {
  //   console.log("useEffect: RENDER");

  //   document.title = `${name} clicou ${count} vezes`;
  // });

  /**
   * Renderiza se a variável name for modificada
   */

  // useEffect(() => {
  //   console.log("useEffect: name RENDER");

  //   document.title = `Nome: ${name}`;
  // }, [name]);

  /**
   * Renderiza se a variável count for modificada
   */

  // useEffect(() => {
  //   console.log("useEffect: count RENDER");

  //   document.title = `Contador: ${count}`;
  // }, [count]);

  /**
   * Mata setInterval após destruir o component
   */

  // useEffect(() => {
  //   console.log("useEffect: RENDER");

  //   const interval = setInterval(() => {
  //     console.log("useEffect: interval RENDER");
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <Box marginY={theme.spacing(0.5)}>
        <Box display="flex" marginBottom={theme.spacing(0.5)}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount((prev) => prev + 1)}
          >
            <Add />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setCount((prev) => prev - 1)}
          >
            <Remove />
          </Button>
          <Typography variant="h4">{count}</Typography>
        </Box>

        <Divider />

        <Box display="flex" marginTop={theme.spacing(0.5)}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setName("Guilherme Rodrigues")}
          >
            <RotateLeft />
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => setName("Guilherme")}
          >
            <RotateLeft />
          </Button>
          <Typography variant="h4">{name}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default UseEffect;
