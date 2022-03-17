import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import styled from "styled-components";

interface IProps {
  title?: string;
  img?: string;
  itemData?: string;
}
const GenresMoods = React.memo((props: IProps) => {
  const { title } = props;
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={5} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
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
  },
  {
    img: "https://www.ispp.edu.kh/wp-content/uploads/elementor/thumbs/Web-Post-Cover-Online-Wellness-pf2s9qty4ir1znronflvax381arfc1fagotn5plle0.jpeg",
    title: "Wellness",
  },
  {
    img: "https://grantland.com/wp-content/uploads/2013/09/mena_maria_g_mr_64011.jpg?w=750",
    title: "pop",
  },
  {
    img: "https://c1.wallpaperflare.com/preview/404/882/481/bokeh-steering-wheel-night-car-thumbnail.jpg",
    title: "opm",
  },
  {
    img: "https://i.pinimg.com/550x/d7/87/c7/d787c7359e9e36d27cd354079e9fbe72.jpg",
    title: "gaming",
  },
  {
    img: "https://icdn.dantri.com.vn/thumb_w/770/2021/12/29/29122anh-1-1640783746989.jpg",
    title: "Sea",
  },
  {
    img: "https://wallpaperaccess.com/full/2968861.jpg",
    title: "adventer sport",
  },
  {
    img: "https://media.springernature.com/w580h326/nature-cms/uploads/collections/Hero_image_1200x675_pixels_2-5273134ecbb5c94f78bbc87366502385.jpg",
    title: "sport",
  },
  {
    img: "https://wallpaperaccess.com/full/2968861.jpg",
    title: "adventer sport",
  },
  {
    img: "https://media.springernature.com/w580h326/nature-cms/uploads/collections/Hero_image_1200x675_pixels_2-5273134ecbb5c94f78bbc87366502385.jpg",
    title: "sport",
  },
  {
    img: "https://wallpaperaccess.com/full/2968861.jpg",
    title: "adventer sport",
  },
  {
    img: "https://media.springernature.com/w580h326/nature-cms/uploads/collections/Hero_image_1200x675_pixels_2-5273134ecbb5c94f78bbc87366502385.jpg",
    title: "sport",
  },
  {
    img: "https://wallpaperaccess.com/full/2968861.jpg",
    title: "adventer sport",
  },
  {
    img: "https://media.springernature.com/w580h326/nature-cms/uploads/collections/Hero_image_1200x675_pixels_2-5273134ecbb5c94f78bbc87366502385.jpg",
    title: "sport",
  },
];

export default GenresMoods;
