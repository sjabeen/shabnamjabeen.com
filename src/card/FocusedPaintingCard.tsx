import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Painting } from '../models/Painting';
import { Box, Stack } from '@mui/material';


export default function FocusedPainting({painting}: {painting: Painting}) {
  return (
      <Stack direction="row" sx={{width: "80vw", height: "30vw"}}>
        <Box sx={{width: "20vw", height: "30vw" }} display="flex" justifyContent="center" alignItems="center">
            <CardMedia
                component="img"
                image={painting.image}
                alt={`${painting.name} ${painting.description}`}
            />
        </Box>
        <Stack sx={{ width: "60vw", margin: "4vw" }}>
            <Stack>
                <Typography align="left" fontFamily={"Grenze"} fontStyle={"italic"} fontSize={"3vw"}>
                    {painting.name}
                </Typography>
                <Typography align="left" fontFamily={"Bitter"} fontSize={"2vw"}>
                    {painting.date}
                </Typography>
                <Typography align="left" fontFamily={"Fraunces"}>
                    {painting.longDescription}
                </Typography>
            </Stack>
        </Stack>
      </Stack>
  );
}