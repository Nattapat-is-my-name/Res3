import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const CustomCard = styled(Card)({
  maxWidth: "auto",
});

function CardU() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6} >
        <CustomCard > 
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random/345x140"
            alt="Random image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Card Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et felis vel nisi tristique tristique
              in quis est. Ut vel suscipit ante. Donec eu bibendum velit. Integer semper malesuada lorem, eu
              gravida elit convallis vel.
            </Typography>
          </CardContent>
        </CustomCard>
      </Grid>
      <Grid item xs={12} sm={6} md={6} > 
        <CustomCard>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random/345x140"
            alt="Random image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Card Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et felis vel nisi tristique tristique
              in quis est. Ut vel suscipit ante. Donec eu bibendum velit. Integer semper malesuada lorem, eu
              gravida elit convallis vel.
            </Typography>
          </CardContent>
        </CustomCard>
      </Grid>
      <Grid item xs={12} sm={6} md={6} >
        <CustomCard>
          <CardMedia
            component="img"
            height="140"
            image="https://source.unsplash.com/random/345x140"
            alt="Random image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Card Title
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et felis vel nisi tristique tristique
              in quis est. Ut vel suscipit ante. Donec eu bibendum velit. Integer semper malesuada lorem, eu
              gravida elit convallis vel.
            </Typography>
          </CardContent>
        </CustomCard>
      </Grid>
    </Grid>
  );
}

export default CardU;