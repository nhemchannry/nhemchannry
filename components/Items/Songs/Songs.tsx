import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { styled as mdstyled } from "@mui/material/styles";
import styled from "styled-components";
import { IconButton, iconClasses } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";

const Item = mdstyled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));

interface IProps {
  title?: string;
  subtitle?: string;
}

const Songer = React.memo((props: IProps) => {
  const { title, subtitle } = props;
  console.log("songs:::::");
  const handleFavourite = (title: string, subtitle: string) => {
    console.log("Favourite:::::", title, subtitle);
  };
  return (
    <StyledWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={12}>
            <Item>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  flexDirection: "row",
                }}
              >
                <Stack flexDirection="row">
                  <StyledImgWraper>
                    <img
                      src="https://i.ytimg.com/vi/DK_0jXPuIr0/maxresdefault.jpg"
                      alt="image"
                    />
                    <Stack justifyContent="center" sx={{ marginLeft: 2 }}>
                      <Typography variant="subtitle1">{title}</Typography>
                      <Typography variant="body2">subtitle</Typography>
                    </Stack>
                  </StyledImgWraper>
                  <Stack justifyContent="center">
                    <Typography className="text-time">3:50</Typography>
                    <Stack className="icon-right" direction="column">
                      <IconButton size="small">
                        <FavoriteIcon />
                      </IconButton>
                      <IconButton size="small">
                        <AddIcon />
                      </IconButton>
                    </Stack>
                  </Stack>
                </Stack>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </StyledWrapper>
  );
});
const StyledWrapper = styled(Stack)`
  .icon-right {
    display: none;
  }
  &:hover {
    .text-time {
      display: none;
    }
    .icon-right {
      display: flex;
      flex-direction: row;
    }
  }
`;
const StyledImgWraper = styled.div`
  display: flex;
  /* flex: 1;
  flex-direction: row; */
  img {
    width: 20%;
    border-radius: 10px;
  }
`;
export default Songer;
