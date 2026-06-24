import { PiHamburgerFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const HamburgerButton = ({
  isOpen,
  setIsOpen,
}) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-2xl"
    >
      {isOpen ? (
        <IoClose />
      ) : (
        <PiHamburgerFill />
      )}
    </button>
  );
};

export default HamburgerButton;