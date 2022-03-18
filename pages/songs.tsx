import type { NextPage } from "next";
import MyFavoriteSongs from "src/Songs";
import Layouts from "../components/Layouts";

const SongsPage: NextPage = () => {
  return (
    <Layouts>
      <MyFavoriteSongs title="" />
    </Layouts>
  );
};

export default SongsPage;
