import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import { Typography } from "@mui/material";
import CardU from "./Card";
import { Grid } from "@mui/material";
const Content = () => {
  return (
    <Box p={{ xs: 0, md: 2 }} > 
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid item xs>
          <Typography variant="h4" sx={{ mb: 2 }}>
            Welcome to My Website
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            porta euismod ex, sit amet accumsan elit volutpat et. Donec
            tincidunt justo velit, eu tincidunt lorem consequat in. Nulla
            commodo semper felis, eu ullamcorper nisl lacinia vel.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            Sed rhoncus ipsum dolor, id pharetra velit aliquam nec. Morbi
            commodo eleifend mauris eget bibendum. Aenean et purus eget quam
            consequat vehicula non non tellus. Fusce commodo tortor ut erat
            blandit, vel tincidunt libero malesuada.
          </Typography>
        </Grid>
        <Grid item >
          <CardU />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Content;
