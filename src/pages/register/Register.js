import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Register = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="sm"
        sx={{ bgcolor: "#cfe8fc", padding: "50px", minHeight: "800px" }}
      >
        <Typography
          variant="h5"
          gutterBottom
          component="div"
          sx={{ marginBottom: "50px" }}
        >
          Nuevo usuario
        </Typography>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Nombre</InputLabel>
              <Input id="nombre" aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Apellido</InputLabel>
              <Input id="apellido" aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="">
          <Grid item>
            <FormControl sx={{ m: 1, width: "350px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Email</InputLabel>
              <Input id="email" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="space-between">
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Nueva Contraseña</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ m: 1, width: "230px", marginBottom: "20px" }}>
              <InputLabel htmlFor="my-input">Repita Contraseña</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid>
            <Button sx={{ marginTop: "100px" }} variant="outlined">
              Registrarse
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} justifyContent="flex-end">
          <Grid item>
            <Button size="small" sx={{ marginTop: "100px" }} color="secondary">
              Ir a Login
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Register;
