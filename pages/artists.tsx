import type { NextPage } from "next";
import MyArtists from "src/Artists/Artists";
import Layouts from "../components/Layouts";

const ArtistsPage: NextPage = () => {
  return (
    <Layouts>
      <MyArtists title="" />
    </Layouts>
  );
};

export default ArtistsPage;
