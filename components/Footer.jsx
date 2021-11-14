export default function Footer() {
  return (
    <footer className="border-t pt-5">
      <img
        src ="/logo.svg"
        alt="Scoreboarder logo"
        width="40px"
        height="40px"
      />
      <h2 className="font-semibold mt-2">Chalmers Leaderboards</h2>
      <div className="flex flex-row justify-between">
        <p className="text-gray-600">Copyright © 2021 Sebastian Danckwardt</p>
        <p className="text-gray-600">
        </p>
      </div>
    </footer>
  );
}