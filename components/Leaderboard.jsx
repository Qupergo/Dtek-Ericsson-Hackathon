import Heading from './Heading'
import Row from './Row'

const Leaderboard = ({ title, participants }) => {
  return (
    <div className="table-fixed flex flex-col items-center space-x-2">
      <Heading.H2>{title}</Heading.H2>
      <table className="rounded-t-lg m-5 w-5/6 mx-auto bg-primary">
        <tr className="text-left border-b border-gray-300 text-gray-200">
          <th className="px-4 py-3">Rank</th>
          <th className="px-4 py-3">Nick</th>
          <th className="px-4 py-3">Score</th>
        </tr>
      {participants.map((person) => {
        return (
          <Row person={person}/>
        )

      })
      }
      </table>

    </div>
  )
}

export default Leaderboard