import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import { faker } from "@faker-js/faker";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { schema, denormalize } from "normalizr";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";

/** Creo conexión con el server websocket */
//const socket = io("http://localhost:8081",  { transports : ['websocket'] });
const socket = io.connect("http://localhost:8082", {
  transports: ["websocket"],
});


const Chat = () => {
  const [message, setMessage] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    /** Creo un fake User */
    const currentUser = {
      id: faker.internet.email(),
      nombre: faker.name.firstName(),
      apellido: faker.name.lastName(),
      edad: faker.random.numeric(2),
      alias: faker.internet.userName(),
      avatar: faker.internet.avatar(),
    };
    setCurrentUser(currentUser);
    //console.log("currentUser", currentUser);

    const getNow = () => {
      return new Date();
    };

    socket.on("connect", () => {
      console.log("🤝 Conectado al servidor");
      console.log("socket.id: ", socket.id);
    });

    /** Al iniciar le envio al servidor el usuario que se conecto */
    socket.emit("set-user", currentUser);

    /** El cliente recibe los mensajes */
    socket.on("all-messages", (mensajes) => {
      console.log("Mensajes", mensajes);
      setMessages(mensajes);
    });

    return () => {
      // socket.disconnect();
    };
  }, [socket]);

  const sendMessage = (e) => {
    console.log("sendMessage...");
    e.preventDefault();
    const msg = message;
    const timestamp = new Date();
    const autor = currentUser;
    socket.emit("new-message", {
      autor: autor,
      texto: msg,
      timestamp: timestamp,
    });
    setMessage("");
  };

  const handleChangeMessage = (event) => {
    setMessage(event.target.value);
  };

  
  return (
    <>
      <Container maxWidth="xl" sx={{ bgcolor: "#cfe8fc", padding: "50px" }}>
        <Grid container spacing={1}>
          {messages.length > 0 &&
            messages.map((message) => (
              <Grid item xs={12} sm={12} md={12} key={message.id}>
                <div>
                  <Alert
                    icon={<CheckIcon fontSize="inherit" />}
                    severity="success"
                  >
                    {message.autor.nombre} <br />
                    {message.texto} <br />
                    {message.timestamp}
                  </Alert>
                </div>
              </Grid>
            ))}
        </Grid>
        <Grid container spacing={1}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl variant="standard">
              <Input
                id="component-simple"
                value={message}
                onChange={handleChangeMessage}
                placeholder="Ingrese su mensaje"
                sx={{ marginTop: "20px", width: "1000px" }}
              />
              <Button
                variant="contained"
                onClick={sendMessage}
                sx={{ marginTop: "20px" }}
              >
                Enviar
              </Button>
            </FormControl>
          </Box>
        </Grid>
      </Container>
    </>
  );
};
export default Chat;
