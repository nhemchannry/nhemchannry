import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import styled from "styled-components";
import Container from "@mui/material/Container";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import { Icon } from "@mui/material";
import { divide } from "lodash";

interface IProps {
  title?: string;
  subtitle?: string;
  img?: string;
}

const ImageIcon = React.memo((props: IProps) => {
  const { title, subtitle, img } = props;
  return (
    <Container
      maxWidth="sm"
      sx={{
        // bgcolor: "#efebe9",
        width: "120vh",
        height: "70vh",
        // border: "GrayText",
      }}
    >
      <ImageList
        sx={{ overflow: "1", width: "100%", height: "100%" }}
        cols={2}
        rowHeight={160}
      >
        {/* <ImageListItem key="Subheader" cols={2}> */}
        {itemData.map((item) => (
          <ImageListItem key={item.title}>
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
                <StyledWraper className="text-time">
                  <IconButton
                    className="icon-right"
                    sx={{ color: "rgba(100, 255, 255, 0.66)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <EqualizerIcon />
                    <AudiotrackIcon />
                    <PlayCircleIcon />
                  </IconButton>
                </StyledWraper>
              }
            />
          </ImageListItem>
        ))}
        {/* </ImageListItem> */}
      </ImageList>
    </Container>
  );
});
const itemData = [
  {
    img: "https://p0.pikist.com/photos/215/74/box-sport-men-training-male-people-person-boxer-boxing.jpg",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2018/12/p-1-this-is-what-kind-of-music-you-should-listen-to-at-work-to-be-more-productive.jpg",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://blog.bandlab.com/uploads/2020/03/make-music-at-home-banner-1024x538.jpg",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },

  {
    img: "https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/Web-Post-Cover-Online-Wellness-pf2s9qty4ir1znronflvax381arfc1fagotn5plle0.jpeg",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.headphonesty.com/wp-content/uploads/2020/11/7_things_to_do_while_listening_to_music___walking-1200x900-cropped.jpg",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://i1.sndcdn.com/artworks-KXbtPppv2plXvQyz-MR8s3g-t500x500.jpg",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://www.spring.org.uk/images/driving.jpg",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvuLwbIw9te8jPBS5pBtnK7xAJ4k6EiIrX6w&usqp=CAU",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.saymedia-content.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTg0ODQzOTk1NzI0MTI5NzY3/200-greatest-bollywood-dance-songs-dance-hits-for-parties.png",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },

  {
    img: "https://media.resources.festicket.com/www/magazine/NYEEvent2021.jpeg",
    title: "Title",
    author: "Album",
    rows: 2,
    cols: 2,
  },
];
const StyledImgWraper = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
    padding: 2px;
    spacing: 10px;
  }
`;
const StyledWraper = styled.div`
  .icon-right {
    display: 5px;
  }
  /* &:hover {
    .icon-right {
      display: flex;
      flex-direction: row;
      spacing: 10px;
    }
  } */
`;

export default ImageIcon;
