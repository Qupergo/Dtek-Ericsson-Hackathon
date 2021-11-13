import Heading from "./Heading";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";

export default function Header({ }) {
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
        <ButtonGroup>
          <Button
            href="https://discord.com/oauth2/authorize?client_id=641229153433288724&scope=bot&permissions=18496"
            type="primary"
          >
            Invite the Discord Bot
          </Button>
        </ButtonGroup>
      </div>

      <hr className="border-secondary" />

    </header>
  );
}