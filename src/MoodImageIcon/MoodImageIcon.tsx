import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { styled as mdstyled } from "@mui/material/styles";
import styled from "styled-components";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import { range } from "lodash";
import ImageIcon from "components/Items/ImageIcon";

const Item = mdstyled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface IProps {
  title?: string;
}
const MoodImageIcon = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <StyledWraper>
      <Stack direction="row" spacing={2}>
        <Grid container spacing={2}>
          {range(0, 1).map((item, i) => (
            <Grid key={i} item xs={12}>
              <ImageIcon key={i + item} title={""} subtitle={""} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </StyledWraper>
  );
});
const StyledWraper = styled.div``;

export default MoodImageIcon;
