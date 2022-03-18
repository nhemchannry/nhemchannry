import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./../store";

export interface IPlayerState {
  playing: boolean;
}

const initialState: IPlayerState = {
  playing: false,
};

export const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setplayTrack(state) {
      state.playing = true;
    },
    setpauseTrack(state) {
      state.playing = false;
    },
  },
});

export const { setplayTrack, setpauseTrack } = playerSlice.actions;

export const selectPlayer = ({ player }: RootState) => player.playing;

export default playerSlice.reducer;
