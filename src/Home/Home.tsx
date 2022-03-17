import React from "react";
import Divider from "@mui/material/Divider";
import NewReleases from "./NewRelease";
import styled from "styled-components";
import AvatarImage from "./Avatar";
import Featured from "./Feature";
import YouMayLike from "./Youmaylike";
import Stack from "@mui/material/Stack";
import Discovers from "../Home/Discover";
import Tracks from "../Home/Track";

const Home = React.memo(() => {
  return (
    <StyledWrapper>
      <NewReleases title="New" />
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <Stack flexDirection="row" sx={{ height: "550px", overflow: "hidden" }}>
        <Tracks title={""} />
        <Discovers title={""} />
      </Stack>
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <Featured />
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <AvatarImage />
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
      <YouMayLike />
      <Divider sx={{ marginTop: 5, marginBottom: 5 }} />
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
`;
export default Home;
