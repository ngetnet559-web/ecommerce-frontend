import { useState } from "react";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "./HamburgerButton";
import { FiMapPin, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white relative shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-6">
        <h1 className="text-3xl font-bold text-blue-900">eMox</h1>

        {/* Search - Desktop */}
        <div className="hidden md:block flex-1">
          <div className="flex items-center border rounded-full px-4 py-3">
            <input
              type="text"
              placeholder="Search for any product or brand"
              className="flex-1 outline-none"
            />
            <FiSearch size={20} />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <FiMapPin />
            <span className="text-sm">Location</span>
          </div>

          <div>AE</div>

          <div className="flex items-center gap-2">
            <FiShoppingCart />
            <span>Cart</span>
          </div>

          <div className="flex items-center gap-2">
            <FiUser />
            <span>Sign In</span>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
