import logo from './logo.svg';
import './App.css';
import PaintingCard from './card/PaintingCard.tsx';
import paintings from "./static/paintings.json";
import { Stack } from '@mui/material';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Stack direction="row" columnGap="5vw" sx={{ width: "80vw", overflowX: "auto" }}>
        {paintings.map(p => (<PaintingCard 
          painting={p.painting}
          name={p.name} date={p.date} 
          desc={p.description} 
          longDesc={p.longDescription} />))}
        </Stack>
      </header>
    </div>
  );
}

export default App;
