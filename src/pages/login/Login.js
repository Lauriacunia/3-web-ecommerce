import React, { useState, useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from "axios";

const Login = () => {
  const PATH = "/login";
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:8080/api${PATH}`, form)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{ bgcolor: "#cfe8fc", padding: "50px", minHeight: "800px" }}
      >
        <Grid container spacing={2} justifyContent="">
          <Grid item>
            <FormControl sx={{ m: 1, width: "350px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                id="email"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <FormControl sx={{ m: 1, width: "350px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Contraseña</InputLabel>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button
              sx={{ marginTop: "100px" }}
              variant="outlined"
              onClick={onSubmit}
            >
              Ingresar
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button size="small" sx={{ marginTop: "100px" }} color="secondary">
              Quiero Registrarme
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Login;
