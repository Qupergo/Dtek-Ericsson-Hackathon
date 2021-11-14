import Leaderboard from "./Leaderboard"


export default function LeaderboardGroup({data}) {
  
  // Give the title and the sorted participants
  // TODO: Make the sorting a setting that is leaderboard specific instead of only descending
  {
    Object.keys(data).map(board => (
      data[board].sort((a,b) => {
        return b.score - a.score
  })))}
    return <div className="w-full flex flex-row items-center">
        {Object.keys(data).map(board => (

          <Leaderboard title={board} participants={data[board]}/>
        ))}
    </div>;
  }
  