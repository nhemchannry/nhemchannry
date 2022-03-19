import Addlists from "components/Items/Addlists";
import React from "react";

interface IProps {
  title?: string;
}
const Addplaylists = React.memo((props: IProps) => {
  const { title } = props;

  return (
    <div>
      <Addlists />
    </div>
  );
});
export default Addlists;
