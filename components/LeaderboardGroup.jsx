import Leaderboard from "./Leaderboard"


export default function LeaderboardGroup({data}) {
    return <div className="flex flex-row items-center">
        {Object.keys(data).map(board => (
          <Leaderboard title={board} participants={data[board]}/>
        ))}
    </div>;
  }
  