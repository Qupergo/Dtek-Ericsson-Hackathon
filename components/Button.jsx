import Image from "next/image";

export default function Button({ children, href, type}) {
  const types = {
    primary: "text-white bg-primary hover:bg-primaryDarker",
    secondary: "text-black bg-secondary hover:bg-secondaryDarker",
    light: "text-black hover:bg-secondary",
  };

  return (
    <button
      className={
        "button py-2 px-4 rounded-lg inline-flex flex-row items-center space-x-2 duration-200 " +
        types[type]
      }
      href={href}
    >
      <span className="font-semibold">{children}</span>
    </button>
  );
}
