import type { NextPage } from "next";
import Layouts from "../components/Layouts";
import News from "src/News";

const NewsPage: NextPage = () => {
  return (
    <Layouts>
      <News />
    </Layouts>
  );
};

export default NewsPage;
