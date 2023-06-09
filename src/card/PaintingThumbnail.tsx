import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Painting } from '../models/Painting';
import { CardActionArea, Stack } from '@mui/material';

export default function PaintingThumbnail({painting, setFocusedPainting}: {painting: Painting, setFocusedPainting: React.Dispatch<React.SetStateAction<Painting>>}) {
  return (
    <Stack>
      <Card sx={{ minWidth: "10vw", minHeight: "10vw", maxHeight: "20vw" }}>
        <CardActionArea onClick={() => setFocusedPainting(painting)}>
          <CardMedia
            component="img"
            image={painting.image}
            alt={`${painting.name} ${painting.description}`}
          />
        </CardActionArea>
      </Card>  
      <Typography fontFamily={"Grenze"} alignContent={"center"}>
        {painting.name}
      </Typography>
    </Stack>
  );
}