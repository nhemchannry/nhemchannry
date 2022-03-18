import React from "react";
import styled from "styled-components";
import { Button, Stack } from "@mui/material";

const Spotify = React.memo(() => {
  return (
    <StyledWrapper>
      <Button variant="contained">Login</Button>
    </StyledWrapper>
  );
});
const StyledWrapper = styled(Stack)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;
    padding: 30px 50px;
  }
`;

export default Spotify;
