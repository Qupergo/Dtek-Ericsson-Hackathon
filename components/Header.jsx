import Heading from "./Heading";

export default function Header() {
  return (
    <header className="space-y-12">
      <div>
        <Heading.Title>
          Keep track of competitions on campus {" "}
          <span className="text-primary">with ease</span>
        </Heading.Title>
        <Heading.Subtitle>
          This is the official website for all scorekeeping on Chalmers
        </Heading.Subtitle>
      </div>

      <hr className="border-secondary" />

    </header>
  );
}
