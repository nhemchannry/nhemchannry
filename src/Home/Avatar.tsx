import React from "react";
import { Artists } from "components/Items";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { range } from "lodash";

const AvatarImage = React.memo(() => {
  return (
    <div>
      <Stack>
        <Typography variant="h6" color="#8c7b75">
          Recommendation
        </Typography>
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        my={1}
      >
        <Typography variant="h4">More Like</Typography>
      </Stack>
      <Stack direction="row" spacing={2}>
        {range(0, 6).map((item, i) => (
          <Artists key={i + item} />
        ))}
      </Stack>
    </div>
  );
});
export default AvatarImage;
