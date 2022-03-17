import React from "react";
import { Playlists } from "components/Items";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import styled from "styled-components";
import { range } from "lodash";
// import Slider from "react-slick";
import HorizontalScroll from "react-scroll-horizontal";

interface IProps {
  title?: string;
  subtitle?: string;
  // showSeeAll?: Boolean;
}
const NewReleases = React.memo((props: IProps) => {
  const { title, subtitle } = props;
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  // };
  return (
    <StyledWrapper>
      <Typography variant="h6" color="#8c7b75">
        {title || "new"}
      </Typography>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={1}
      >
        <Typography variant="h4">Releases</Typography>
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
      {/* <HorizontalScroll> */}
      {/* <Slider {...settings}> */}
      <Stack direction="row" spacing={2}>
        {range(0, 10).map((item, i) => (
          <Playlists
            key={i}
            title={"title" + item}
            subtitle={"Subtitle" + item}
          />
        ))}
      </Stack>
      {/* </Slider> */}
      {/* </HorizontalScroll> */}
    </StyledWrapper>
  );
});
const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export default NewReleases;
