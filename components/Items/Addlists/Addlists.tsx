import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import Stack from "@mui/material/Stack";
import { IconButton, ImageList } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { margin } from "@mui/system";
import Typography from "@mui/material/Typography";

interface IProps {
  title?: string;
}
const Addlists = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <StyledWrapper>
      <h1>My Playlists</h1>
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "#efebe9",
          width: "100vh",
          height: "70vh",
          border: "GrayText",
          boxShadow: "revert",
        }}
      >
        <Stack
          px={10}
          py={20}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <IconButton>
            <PlaylistAddIcon />
          </IconButton>
          <IconButton>
            <StyledLogo variant="h5">Create New Playlists</StyledLogo>
          </IconButton>
        </Stack>
      </Container>
    </StyledWrapper>
  );
});
const StyledLogo = styled(Typography)`
  font-weight: 700;
`;
const StyledWrapper = styled.div`
  && {
    padding: 10px;
  }
`;
export default Addlists;
