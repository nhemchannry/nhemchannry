import React from "react";
import styled from "styled-components";
import { Typography, Grid } from "@mui/material";
import { Playlists } from "components/Items";
import { range } from "lodash";

const News = React.memo(() => {
  return (
    <StyledWrapper>
      <Typography variant="h4">New Releases</Typography>
      <Grid container spacing={2}>
        {range(0, 32).map((item, i) => (
          // eslint-disable-next-line react/jsx-key
          <Grid item xs={3}>
            <Playlists key={i} title={`Title ${item}`} subtitle="subtitle" />
          </Grid>
        ))}
      </Grid>
    </StyledWrapper>
  );
});

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 50px;
`;

export default News;
