import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { styled as mdstyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GenresMoods from "components/Items/GenresMoods";
import styled from "styled-components";
import { Grid } from "@mui/material";
import MyFavoriteSonge from ".";
import Songer from "components/Items/Songs/Songs";
import { range } from "lodash";

const Item = mdstyled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface IProps {
  title: string;
}
const MyFavoriteSongs = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <div>
      <Typography variant="h4">Favorite Songs</Typography>
      <Stack
        sx={{ overflow: "auto", paddingRight: 2 }}
        direction="column"
        spacing={2}
      >
        {range(0, 3).map((item, i) => (
          <Songer key={i} title={"title" + item} subtitle={"sub" + item} />
        ))}
      </Stack>
    </div>
  );
});
const StyledWraper = styled.div`
  padding: 2px;
`;

export default MyFavoriteSongs;
