import React, { useCallback, useEffect, useState } from "react";
import { Button, Box, Paper, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import Logo from "../../assets/images/logo.svg";
import useStyles from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertActive, setAlertActive] = useState(false);

  const { paper, image, alert } = useStyles();

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    setAlertActive(true);
  }, []);

  useEffect(() => {
    if (alertActive) {
      setTimeout(() => {
        setAlertActive(false);
      }, 5000);
    }
  }, [alertActive]);

  return (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow="1"
    >
      <Paper
        component="form"
        onSubmit={handleSubmit}
        className={paper}
        elevation={3}
      >
        <img src={Logo} alt="logo" className={image} />
        <br />
        <Typography variant="h5" align="center" color="primary">
          Bem Vindo!
        </Typography>
        <br />

        <TextField
          label="E-mail"
          type="email"
          variant="filled"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <br />
        <TextField
          label="Senha"
          type="password"
          variant="filled"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          required
        />
        <br />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </Paper>
      {alertActive && (
        <Alert
          variant="filled"
          severity="info"
          className={alert}
          onClose={() => setAlertActive(false)}
        >
          E-mail: {email}
          <br />
          Senha: {password}
        </Alert>
      )}
    </Box>
  );
};

export default Login;
