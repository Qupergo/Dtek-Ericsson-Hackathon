export default function LeaderboardGroup() {
    return <div className="flex flex-col items-center">
        {Object.keys(tables).map(board => (
          <Leaderboard title={board} participants={tables[board]}/>
        ))}
    </div>;
  }
  