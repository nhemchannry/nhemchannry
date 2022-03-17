import type { NextPage } from "next";
import Layouts from "../components/Layouts";
import GenresMoods from "../components/Items/GenresMoods";
import Genres from "src/Genres";

const GenresPage: NextPage = () => {
  return (
    <Layouts>
      <div>
        <Genres title="" />
      </div>
    </Layouts>
  );
};

export default GenresPage;
