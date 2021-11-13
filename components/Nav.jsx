import Image from "next/image";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Modal from "./Modal"

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between">
      <div className="flex flex-row space-x-5 items-center">
        <img
          alt="logotype"
          src="/logo.svg"
          height="50px"
          width="50px"
        />
      </div>
      <ButtonGroup>
        <Modal />

        <Button
          href="#"
          type="secondary"
        >
          Login
        </Button>
      </ButtonGroup>
    </nav>
  );
}
