import { FiShoppingCart, FiUser } from "react-icons/fi";
import { LiaSignInAltSolid } from "react-icons/lia";

const MobileMenu = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-16 right-0 h-[calc(100vh-4rem)] w-64 sm:w-72 bg-gray-50 shadow-xl border-l z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col p-5 gap-3">
        <button className="flex items-center gap-3 rounded-lg p-3 text-gray-700 hover:bg-blue-100 transition">
          <FiShoppingCart className="text-2xl" />
          <span className="font-medium text-2xl">Cart</span>
        </button>

        <button className="flex items-center gap-3 rounded-lg p-3 text-gray-700 hover:bg-blue-100 transition">
          <LiaSignInAltSolid className="text-2xl" />
          <span className="font-medium text-2xl">Sign In</span>
        </button>

        <button className="flex items-center gap-3 rounded-lg p-3 text-gray-700 hover:bg-blue-100 transition">
          <FiUser className="text-2xl" />
          <span className="font-medium text-2xl">Register</span>
        </button>

        <hr className="my-2" />

        {/* Navigation Links */}
        <nav className="flex flex-col gap-2">
          <a
            href="/"
            className="rounded-lg p-3 text-gray-700 text-2xl hover:bg-blue-100 transition"
          >
            Home
          </a>

          <a
            href="/shop"
            className="rounded-lg p-3 text-gray-700 text-2xl hover:bg-blue-100 transition"
          >
            Shop
          </a>

          <a
            href="/contact"
            className="rounded-lg p-3 text-gray-700 text-2xl hover:bg-blue-100 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;