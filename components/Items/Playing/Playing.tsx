import React from "react";
import { Stack, IconButton, Slider, Typography, Icon } from "@mui/material";
import styled from "styled-components";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import LoopIcon from "@mui/icons-material/Loop";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useAppSelector, useAppDispatch } from "@redux";

import {
  selectPlayer,
  setpauseTrack,
  setplayTrack,
} from "@redux/reducers/playerSlice";

const Playing = React.memo(() => {
  const dispatch = useAppDispatch();
  const player = useAppSelector(selectPlayer);
  console.log("player:::", player); // true or fasle
  const handlePlay = () => {
    dispatch(player ? setpauseTrack() : setplayTrack());
  };

  return (
    <StyledWrapper direction="row" alignItems="center" spacing={2}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton>
          <SkipPreviousIcon />
        </IconButton>
        <StyledPlay onClick={handlePlay}>
          {player ? <PauseIcon /> : <PlayArrowIcon />}
        </StyledPlay>
        <IconButton>
          <SkipNextIcon />
        </IconButton>
      </Stack>
      <Stack flex="1" direction="row" alignItems="center" spacing={2}>
        <Typography>0:10</Typography>
        <Slider defaultValue={10} aria-label="Small" valueLabelDisplay="auto" />
        <Typography>3:20</Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={3}>
        <IconButton>
          <VolumeUpIcon />
        </IconButton>
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton>
          <LoopIcon />
        </IconButton>
      </Stack>
    </StyledWrapper>
  );
});

const StyledWrapper = styled(Stack)`
  && {
    /* position: fixed; */
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1400;
    height: var(--playing_h);
    padding: 20px 35px;
    box-shadow: 10px -10px 15px rgb(168 179 211 / 24%);
  }
`;
const StyledPlay = styled(IconButton)`
  && {
    border: 2px solid;
  }
`;
export default Playing;
