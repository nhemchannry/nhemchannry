import HomeIcon from "@mui/icons-material/Home";
import BoltIcon from "@mui/icons-material/Bolt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import AlbumIcon from "@mui/icons-material/Album";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import PeopleIcon from "@mui/icons-material/People";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { Typography } from "@mui/material";

export const MENUS = [
  { label: "Home", value: "home", url: "/", icon: <HomeIcon /> },
  { label: "Charts", value: "charts", url: "/charts", icon: <BoltIcon /> },
  { label: "News", value: "news", url: "/news", icon: <LocalOfferIcon /> },
  { label: "Genres", value: "genres", url: "/genres", icon: <LightbulbIcon /> },
  { label: "YOUR LIBRARY", value: "", url: "" },

  {
    label: "Playlists",
    value: "playlists",
    url: "/playlists",
    icon: <PlaylistPlayIcon />,
  },
  { label: "Artists", value: "artists", url: "/artists", icon: <PeopleIcon /> },
  { label: "Songs", value: "songs", url: "/songs", icon: <MusicNoteIcon /> },
];
export const checkCurrentPage = (url: string, cur_url: string) => {
  if (url === cur_url) {
    return true;
  }
  return false;
};
