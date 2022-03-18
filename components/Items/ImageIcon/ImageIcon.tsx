import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import styled from "styled-components";

interface IProps {
  title: string;
  subtitle: string;
}

const ImageIcon = React.memo((props: IProps) => {
  const { title, subtitle } = props;
  return (
    <ImageList
      sx={{
        width: 550,
        height: 500,
        marginLeft: 10,
      }}
    >
      <ImageListItem key="Subheader" cols={2}></ImageListItem>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <StyledImgWraper>
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </StyledImgWraper>
          <ImageListItemBar
            title={item.title}
            subtitle={item.author}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.title}`}
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
});
const itemData = [
  {
    img: "https://p0.pikist.com/photos/215/74/box-sport-men-training-male-people-person-boxer-boxing.jpg",
    title: "Boxing",
    author: "",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://p0.pikist.com/photos/215/74/box-sport-men-training-male-people-person-boxer-boxing.jpg",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/Web-Post-Cover-Online-Wellness-pf2s9qty4ir1znronflvax381arfc1fagotn5plle0.jpeg",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/Web-Post-Cover-Online-Wellness-pf2s9qty4ir1znronflvax381arfc1fagotn5plle0.jpeg",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/Web-Post-Cover-Online-Wellness-pf2s9qty4ir1znronflvax381arfc1fagotn5plle0.jpeg",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/Web-Post-Cover-Online-Wellness-pf2s9qty4ir1znronflvax381arfc1fagotn5plle0.jpeg",
    title: "Camera",
    author: "@helloimnik",
    rows: 2,
    cols: 2,
    featured: true,
  },
];
const StyledImgWraper = styled.div`
  margin: center;
  img {
    width: 100%;
    border-radius: 10px;
    padding: 2px;
  }
`;

export default ImageIcon;
