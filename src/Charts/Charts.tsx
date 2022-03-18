import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { styled as mdstyled } from "@mui/material/styles";
import styled from "styled-components";
import { range } from "lodash";
import Songer from "components/Items/Songs/Songs";

const Item = mdstyled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

interface IProps {
  title?: string;
  subtitle?: string;
}

const Charts = React.memo((props: IProps) => {
  const { title, subtitle } = props;
  return (
    <StyledWraper flex="1">
      <Typography variant="h6" color="#8c7b75">
        Hot Track
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="left"
        my={1}
      >
        <Typography variant="h4">Global TOP 50</Typography>
      </Stack>
      <Stack
        sx={{ overflow: "auto", paddingRight: 2 }}
        direction="column"
        spacing={2}
      >
        {range(0, 8).map((item, i) => (
          <Songer key={i} title={"title" + item} subtitle={"sub" + item} />
        ))}
      </Stack>
    </StyledWraper>
  );
});
const StyledWraper = styled(Stack)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;
// const StyledImgWraper = styled.div`
//   /* display: flex;
//   flex: 1; */
//   overflow: ;
//   .img {
//     width: 20%;
//     border-radius: 5px;
//   }
// `;
export default Charts;
