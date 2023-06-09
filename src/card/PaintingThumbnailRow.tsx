import React from "react";
import { Stack } from "@mui/material";
import { Painting } from "../models/Painting.tsx";
import PaintingThumbnail from "./PaintingThumbnail.tsx";

export default function PaintingThumbnailRow({paintings, setFocusedPainting}: {paintings: Painting[], setFocusedPainting: React.Dispatch<React.SetStateAction<Painting>>}) {

    return (<Stack direction="row" columnGap="5vw" sx={{ alignItems: "center", width: "80vw", overflowX: "auto",  scrollbarColor: "#6b6b6b #2b2b2b",
"&::-webkit-scrollbar, & *::-webkit-scrollbar": {
  backgroundColor: "#2b2b2b",
},
"&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
  borderRadius: 8,
  backgroundColor: "#6b6b6b",
  minHeight: 24,
  border: "3px solid #2b2b2b",
},
"&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
  {
    backgroundColor: "#959595",
  },
"&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
  {
    backgroundColor: "#959595",
  },
"&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
  {
    backgroundColor: "#959595",
  },
"&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
  backgroundColor: "#2b2b2b",
},}}>

{paintings.map(p => (<PaintingThumbnail 
  painting={p} setFocusedPainting={setFocusedPainting} />))}

  </Stack>);
}