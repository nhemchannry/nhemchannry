import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { styled as mdstyled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GenresMoods from "components/Items/GenresMoods";

const Item = mdstyled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

interface IProps {
  title: string;
}
const Discovers = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <Stack flex="1">
      <Typography variant="h6" color="#8c7b75">
        Discover
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="left"
        my={1}
      >
        <Typography variant="h4">Genres & Moods</Typography>
        <Button
          endIcon={
            <Typography variant="h6" color="#8c7b75">
              <ArrowForwardIcon />
            </Typography>
          }
        >
          <Typography variant="h6" color="#8c7b75">
            see all
          </Typography>
        </Button>
      </Stack>
      {/* <GenresMoods title="" /> */}
      {/* <Stack direction="row" spacing={2}>
        {range(0, 6).map((item, i) => (
          <GenresMoods key={i + item} />
        ))}
      </Stack> */}
    </Stack>
  );
});

export default Discovers;
