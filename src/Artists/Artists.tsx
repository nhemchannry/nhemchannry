import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled as mdstyled } from "@mui/material/styles";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { range } from "lodash";
import Artists from "components/Items/Artists";

const Item = mdstyled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface IProps {
  title: string;
}
const MyArtists = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <div>
      <Typography variant="h4"> My Artists</Typography>
      <Stack direction="row" spacing={2}>
        <Grid container spacing={2}>
          {range(0, 12).map((item, i) => (
            <Grid key={i} item xs={2}>
              <Artists key={i + item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
});
const StyledWraper = styled.div`
  padding: 2px;
`;

export default MyArtists;
