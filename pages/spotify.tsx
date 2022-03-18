import React from "react";
import { Stack } from "@mui/material";
import Spotify from "src/Spotify";

const SpotifyPage = () => {
  return (
    <Stack sx={{ width: "100%", height: "100%" }}>
      <title>Login</title>
      <Spotify />
    </Stack>
  );
};

export default SpotifyPage;
