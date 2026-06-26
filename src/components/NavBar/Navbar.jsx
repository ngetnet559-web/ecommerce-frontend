import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import MobileMenu from "./MobileMenu";
import Filter from "./Filter";
import HamburgerButton from "./HamburgerButton";
import { live } from "../../assets/icons/icon";

import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsFilterOpen(false);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
    setIsOpen(false);
  };
  return (
    <>
      <nav className="sticky top-0 bg-blue-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-6">
          <div className="">
            <h1 className="text-3xl font-bold text-blue-900">eMox</h1>
            <div className="flex gap-2">
              <div className="h-2 w-2 border rounded-full bg-[#EC4899]"></div>
              <div className="h-2 w-2 border rounded-full bg-[#EC4899]"></div>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden lg:block flex-1">
            <div className="flex items-center border border-[rgba(18,81,216,0.805)] rounded-full px-4 py-3">
              <input
                type="text"
                placeholder="Search for any product or brand"
                className="flex-1 bg-transparent outline-none"
              />
              <FiSearch size={20} aria-hidden="true" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder="Location"
            />

            <div className="flex items-center gap-2">
              <FiShoppingCart />
              <span>Cart</span>
            </div>

            <div className="flex items-center gap-2">
              <FiUser />
              <span>Sign In</span>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="md:hidden flex items-center gap-3">
            {/* Filter Hamburger */}

            <ReactFlagsSelect
              selected={selected}
              onSelect={(code) => setSelected(code)}
              placeholder="Location"
            />

            {/* Navigation Hamburger */}
            <HamburgerButton isOpen={isOpen} setIsOpen={toggleMenu} />
          </div>
        </div>

        {/* Mobile Menus */}
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <Filter isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />
      </nav>

      <div className="sticky top-20 bg-blue-100 flex justify-between items-start sm:items-center gap-3 px-2 py-2">
        <div className="flex gap-2 pt-2">
          <button onClick={toggleFilter} aria-label="Open categories">
            <GiHamburgerMenu size={24} />
          </button>

          <select
            className="border rounded-xl pl-2 pr-2 pb-2 flex items-center justify-center"
            name="Categories"
            id="category-select"
          >
            <option value=""> All Categories</option>
            <option value="laptop">Laptops</option>
            <option value="desktop">Desktops</option>
            <option value="Phone">Phone</option>
            <option value="beauty">Beauty</option>
            <option value="cloth">Cloth</option>
            <option value="electronics">Electronics</option>
          </select>

          <div>
            <ul className="hidden lg:flex items-center gap-6">
              <li>Electronics</li>
              <li>Fashion</li>
              <li>Women</li>
              <li>Men</li>
              <li>Kids</li>
              <li>Beauty & Health</li>
              <li>Home & Living</li>
              <li>Groceries</li>
              <li>Sports</li>
              <li>Automotive</li>
              <li>Best Deals</li>
            </ul>
          </div>
        </div>

        <div className="flex-shrink-0 flex items-center gap-1 whitespace-nowrap pt-2">
          <h1 className="text-xl font-bold text-blue-900">
            eMox<span className="text-red-300 text-sm">Live</span>
          </h1>
          <img className="w-4" src={live} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
