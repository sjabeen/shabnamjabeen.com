import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img width={400} height={600} src={"/images/KalleenSabrina.jpg"}/>
        <p>
          Type "npm run start" in the home directory to run locally, git commit to push to AWS Amplify. Store any static images you want in the /public folder and reference them by their path in that folder (e.g. /public/img/painting.jpg becomes /img/painting.jpg). Enjoy.
        </p>
      </header>
    </div>
  );
}

export default App;
