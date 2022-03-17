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

const Item = mdstyled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface IProps {
  title: string;
}
const Genres = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <div>
      <Typography variant="h4">genres & Moods</Typography>
      <StyledWraper>
        <GenresMoods title="" />
      </StyledWraper>
    </div>
  );
});
const StyledWraper = styled(Stack)`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 12px;
  margin-top: 10px;
`;

export default Genres;
