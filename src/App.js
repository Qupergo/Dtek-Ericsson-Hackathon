import Leaderboard from "./components/leaderboard/Leaderboard";
import Modal from './components/Modal/Modal';

const tables = {
  "öhlhäfv": [
  {
    pos: 1,
    name: "dude1",
    score: 30
  },
  {
    pos: 2,
    name: "dude2",
    score: 40
  },
  ],  
  "smash turnering": [
  {
    pos: 1,
    name: "yeeman",
    score: 30
  },
  {
    pos: 2,
    name: "koolkid1337",
    score: 39
  },
  ],  
}

function App() {
  return (
    <div>
      <h1>Leaderboard</h1>
      {
        Object.keys(tables).map(board => (
          <Leaderboard title={board} participants={tables[board]}/>
        ))
      }
      <Modal />
    </div>
  );
}

export default App;