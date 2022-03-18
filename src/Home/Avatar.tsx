import React from "react";
import { Artists } from "components/Items";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
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
        <Grid container spacing={2}>
          {range(0, 12).map((item, i) => (
            <Grid key={i} item xs={2}>
              <Artists key={i + item} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </div>
  );
});
export default AvatarImage;
