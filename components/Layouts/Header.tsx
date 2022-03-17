import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Header = React.memo(() => {
  return (
    <Stack
      px={2}
      py={4}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <StyledLogo variant="h5">Spotify</StyledLogo>
      <IconButton>
        <SearchIcon />
      </IconButton>
    </Stack>
  );
});
const StyledLogo = styled(Typography)`
  font-weight: 700;
`;

export default Header;
