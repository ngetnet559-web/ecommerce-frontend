import { FiMapPin, FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";

const MobileMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-black border-t shadow-md">
      <div className="p-4 space-y-4">
        <div className="flex items-center border rounded-full px-4 py-3">
          <input
            type="text"
            placeholder="Search ..."
            className="flex-1 outline-none"
          />
          <FiSearch size={20} />
        </div>

        {/* Menu Items */}
        <div className="flex items-center gap-3">
          <FiMapPin />
          <span>Location</span>
        </div>

        <div className="flex items-center gap-3">
          <FiShoppingCart />
          <span>Cart</span>
        </div>

        <div className="flex items-center gap-3">
          <FiUser />
          <span>Sign In</span>
        </div>

        <hr />

        <a href="/" className="block py-2">
          Home
        </a>

        <a href="/shop" className="block py-2">
          Shop
        </a>

        <a href="/contact" className="block py-2">
          Contact
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
