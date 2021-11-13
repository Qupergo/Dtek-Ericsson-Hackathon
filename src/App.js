import Leaderboard from "./components/leaderboard/Leaderboard";

const tables = {"öhlhäfv": [
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
]  
}

function App() {
  return (
  <div>
    <div>
      <Button />
    </div>
    
    <div>
      <h1>Leaderboard</h1>
      {
        Object.keys(tables).map(board => (
          <Leaderboard title={board} participants={tables.board}/>
        ))
      }
      {/* <Leaderboard title={"Ölhäfv"} participants={test}/> */}
    </div>
  </div>
  );
}

export default App;