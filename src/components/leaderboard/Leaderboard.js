import Row from '../leaderboard/Row/Row'

const Leaderboard = ({ title, participants }) => {
  return (
    <div>
      <h1>{title}</h1> 
      {participants.map((person) => {
        return (
          <Row person={person}/>
        )
      })}
    </div>
  )
}

export default Leaderboard