import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { Button, Box, Paper, TextField, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import Logo from "../../assets/images/logo.svg";
import useStyles from "./styles";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertActive, setAlertActive] = useState(false);
  const [login, setLogin] = useState(false);

  const { paper, image, alert } = useStyles();
  const history = useHistory();

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      if (email === "guilhermeddc@gmail.com" && password === "123") {
        setLogin(true);
      } else {
        setLogin(false);
      }

      setAlertActive(true);
    },
    [email, password]
  );

  useEffect(() => {
    if (alertActive) {
      setTimeout(() => {
        setAlertActive(false);
      }, 3000);
    }
  }, [alertActive]);

  useEffect(() => {
    if (login) {
      setTimeout(() => {
        history.push("/home");
      }, 1500);
    }
  }, [login, history]);

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

      {alertActive &&
        (login ? (
          <Alert
            variant="filled"
            severity="info"
            className={alert}
            onClose={() => setAlertActive(false)}
          >
            Conectado com sucesso.
          </Alert>
        ) : (
          <Alert
            variant="filled"
            severity="error"
            className={alert}
            onClose={() => setAlertActive(false)}
          >
            E-mail ou senha incorreto.
          </Alert>
        ))}
    </Box>
  );
};

export default Login;
