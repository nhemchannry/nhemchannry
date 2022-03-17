import React from "react";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import styled from "styled-components";
import { ViewColumn } from "@material-ui/icons";

interface IProps {
  title?: string;
}
const Artists = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <div>
      <StyledImgWraper>
        <Avatar
          alt="Image"
          src="https://liftedasia.com/assets/blog/LiFTED_Cover_vannda.jpg"
          sx={{ width: 190, height: 190 }}
        />
        <Typography textAlign="center" variant="h6">
          {"Vannda"}
          {title}
        </Typography>
      </StyledImgWraper>
    </div>
  );
});
const StyledImgWraper = styled.div``;
export default Artists;
