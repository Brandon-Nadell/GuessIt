import logo from './logo.svg';
import './App.css';

function getRandom() {
  var headers = { 'Authorization': process.env.REDDIT, 'User-Agent': 'GuessIt by Bandm_' } 
  fetch('https://oauth.reddit.com/r/theonion/random', headers=headers)
    .then(res => res.json())
    .then(data => console.log(data));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {
          getRandom()
        }
      </header>
    </div>
  );
}

export default App;
