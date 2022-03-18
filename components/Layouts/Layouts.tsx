import React from "react";
import { Stack } from "@mui/material";
import SideBar from "./SideBar";
import styled from "styled-components";
import Playing from "components/Items/Playing";

interface IProps {
  children: any;
}
const Layouts = React.memo((props: IProps) => {
  return (
    <StyleLayoutWrapper id="id-layout">
      <Stack className="content-layout" direction="row">
        <SideBar></SideBar>
        <StyledContent>{props.children}</StyledContent>
      </Stack>
      <Playing />
    </StyleLayoutWrapper>
  );
});
const StyleLayoutWrapper = styled.div`
  && {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    .content-layout {
      height: calc(100vh - 0px);
      overflow: hidden;
    }
  }
`;
const StyledContent = styled.div`
  && {
    width: calc(100vw - var(--sidebar_w));
    overflow: auto;
  }
`;

export default Layouts;
