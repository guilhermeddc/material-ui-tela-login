/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback, useEffect, useMemo } from "react";
import axios from "axios";

import {
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  useTheme,
} from "@material-ui/core";
import filter from "../../../utils/filter";
import { RotateLeft } from "@material-ui/icons";

interface IUsers {
  name: string;
}

const UseMemo: React.FC = () => {
  const theme = useTheme();

  const [users, setUsers] = useState<IUsers[]>([]);
  const [query, setQuery] = useState("");
  const RENDER = useState(false);

  const handleGetProfile = useCallback(async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(data);
  }, []);

  useEffect(() => {
    handleGetProfile();
  }, [handleGetProfile]);

  useEffect(() => {
    document.title = "useMemo";
  }, []);

  return (
    <>
      <Box marginY={theme.spacing(0.5)}>
        <TextField
          label="Filtrar"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
        />

        <br />

        <Typography variant="h5">Nomes:</Typography>

        {/* {useMemo(() => filter(users, query), [query, users])?.map(
          (item, index) => (
            <Typography key={index} variant="caption" component="p">
              {item?.name}
            </Typography>
          )
        )} */}

        {filter(users, query)?.map((item, index) => (
          <Typography key={index} variant="caption" component="p">
            {item?.name}
          </Typography>
        ))}
      </Box>

      <Divider />

      <Box display="flex" marginTop={theme.spacing(0.5)}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => RENDER[1]((prev) => !prev)}
        >
          <RotateLeft />
        </Button>
      </Box>
    </>
  );
};

export default UseMemo;
