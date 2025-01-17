import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Zoom, Grid2 } from "@mui/material";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";

import memories from "./images/memories.jpg";

const App = () => {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={memories} alt="memories" height="60" />
      </AppBar>
      <Zoom in={true} timeout={500}>
        <Container>
          <Grid2
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid2 item xs={12} sm={7}>
              <Posts />
            </Grid2>
            <Grid2 item xs={12} sm={4}>
              <Form />
            </Grid2>
          </Grid2>
        </Container>
      </Zoom>
    </Container>
  );
};
export default App;
