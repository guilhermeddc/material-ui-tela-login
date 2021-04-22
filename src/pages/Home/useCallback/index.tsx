import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

import { Box, Divider, Typography, useTheme } from "@material-ui/core";

interface IUsers {
  name: string;
}

const UseCallback: React.FC = () => {
  const theme = useTheme();

  const [users, setUsers] = useState<IUsers[]>([]);

  // const handleGetProfile = async () => {
  //  const { data } = await axios.get(
  // "https://jsonplaceholder.typicode.com/users"
  // );

  // setUsers(data);
  // };

  const handleGetProfile = useCallback(async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    setUsers(data);
  }, []);

  // useEffect(() => {
  //   handleGetProfile();
  // }, []);

  useEffect(() => {
    handleGetProfile();
  }, [handleGetProfile]);

  useEffect(() => {
    document.title = "useCallback";
  }, []);

  return (
    <>
      <Box marginY={theme.spacing(0.5)}>
        <Typography variant="h5">Nomes:</Typography>
        {users?.map((item, index) => (
          <Typography key={index} variant="caption" component="p">
            {item?.name}
          </Typography>
        ))}
      </Box>

      <Divider />
    </>
  );
};

export default UseCallback;
