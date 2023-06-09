import './App.css';
import FocusedPainting from './card/FocusedPaintingCard.tsx';
import originals from "./static/originals.json";
import masters from "./static/masters.json";
import { Stack, Typography } from '@mui/material';
import { useState } from 'react';
import PaintingThumbnailRow from './card/PaintingThumbnailRow.tsx';

function App() {

  const [focusedPainting, setFocusedPainting] = useState(originals[0]);

  return (
    <div className="App">
      <header className="App-header">
        <Stack>
          <Stack sx={{ margin: "1vw" }} spacing="0.1vw">
            <Typography fontFamily="Playfair Display" fontSize="5vw" marginBottom="1vw">
              Shabnam Jabeen's Gallery
            </Typography>
            <Typography align="left" fontFamily={"Bitter"} fontStyle={"italic"} fontSize={"2vw"}>
                A showcase of original paintings and recreations of selected works from the masters
            </Typography>
          </Stack>
    
        <Stack spacing="1vw">
          <FocusedPainting painting={focusedPainting} />

          <Stack direction="row">
            <Typography fontFamily="Playfair Display" fontSize="4vw">
              My Originals
            </Typography>
          </Stack>
          <PaintingThumbnailRow paintings={originals} setFocusedPainting={setFocusedPainting} />

          <Stack direction="row">
            <Typography fontFamily="Playfair Display" fontSize="4vw">
              My Masters
            </Typography>
          </Stack>
          <PaintingThumbnailRow paintings={masters} setFocusedPainting={setFocusedPainting} />
        </Stack>
      </Stack>
      </header>
    </div>
  );
}

export default App;
