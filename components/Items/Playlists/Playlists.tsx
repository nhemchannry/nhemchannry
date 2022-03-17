import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

interface IProps {
  title: string;
  subtitle: string;
}
const Playlists = React.memo((props: IProps) => {
  const { title, subtitle } = props;
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        marginRight: 2,
      }}
    >
      <StyledImgWraper>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNzBjYWIzNmQtZjA2NS00ZTMzLThmODQtMGE0MTEzZGE1YTgzXkEyXkFqcGdeQXVyNDQ5MDYzMTk@._V1_.jpg"
          alt="image"
        />
      </StyledImgWraper>
      <Typography variant="subtitle1">{title}</Typography>
      {subtitle && <Typography variant="body2">subtitle</Typography>}
    </Box>
  );
});
const StyledImgWraper = styled.div`
  img {
    width: 100%;
    border-radius: 5px;
  }
`;
export default Playlists;
