import Addlists from "components/Items/Addlists";
import type { NextPage } from "next";
import Layouts from "../components/Layouts";

const PlaylisitsPage: NextPage = () => {
  return (
    <Layouts>
      <Addlists />
    </Layouts>
  );
};

export default PlaylisitsPage;
