import type { NextPage } from "next";
import Layouts from "../components/Layouts";
import React, { Component } from "react";
import Charts from "src/Charts";
// import Slider from "react-slick";

const Chartpage: NextPage = () => {
  return (
    <Layouts>
      <Charts />
    </Layouts>
  );
};

export default Chartpage;
