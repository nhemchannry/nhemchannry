import React from "react";
import { Playlists } from "components/Items";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { range } from "lodash";

interface IProps {
  title?: string;
  subtitle?: string;
}
const YouMayLike = React.memo((props: IProps) => {
  const { title, subtitle } = props;
  return (
    <StyledWrapper>
      <Typography variant="h6" color="#8c7b75">
        {title || "You May Like"}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={1}
      >
        <Typography variant="h4">Top Lists</Typography>
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
      <Stack direction="row" spacing={2}>
        {range(0, 4).map((item, i) => (
          <Playlists
            key={i}
            title={"title" + item}
            subtitle={"subtitle" + item}
          />
        ))}
      </Stack>
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default YouMayLike;
