import playStore from "../../assets/icons/playStore.svg";
import appStore from "../../assets/icons/appStore.svg";
import { FaEnvelope, FaChevronDown } from "react-icons/fa6";
import {
  socialLinks,
  shopLinks,
  customerServiceLinks,
  aboutLinks,
} from "../../data/footerData.js";
const FooterLinkList = ({ title, links }) => {
  return (
    <div>
      <h4 className="text-sm font-bold text-gray-900 mb-4">{title}</h4>
      <ul className="flex flex-col gap-2.5">
        {links.map((item) => (
          <li key={item.id}>
            <a
              href={item.url}
              className="text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200 ease-in-out"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const StoreBadge = ({ href, src, alt }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full max-w-[150px] transition-all duration-200 hover:opacity-80 hover:scale-[1.02]"
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-contain rounded-lg"
      />
    </a>
  );
};

// --- Main Component ---

export default function Footer() {
  return (
    <footer className="w-full bg-white font-sans">
      {/* --- Top Section: Newsletter --- */}
      <div className="bg-[#f6f8fd] py-8 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Icon & Text */}
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white rounded-full shadow-sm shrink-0 text-blue-600">
              <FaEnvelope className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900">Stay Updated</h3>
              <p className="text-sm text-gray-500 max-w-xs">
                Subscribe to get special offers, free giveaways, and
                once-in-a-lifetime deals.
              </p>
            </div>
          </div>

          {/* Input & Subscribe Button */}
          <div className="w-full max-w-lg flex bg-white rounded-lg shadow-sm p-1.5">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 outline-none text-sm text-gray-700 bg-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-8 py-2.5 rounded-md transition-colors whitespace-nowrap  cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* --- Middle Section: Main Links --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Column 1: Brand Info */}
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
            eMox
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Your one-stop shop for the best products from top brands. Quality,
            value, and convenience delivered to you.
          </p>
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                className={`w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 ${social.hoverColor}`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Column 2, 3, 4 */}
        <FooterLinkList title="Shop" links={shopLinks} />
        <FooterLinkList title="Customer Service" links={customerServiceLinks} />
        <FooterLinkList title="About Us" links={aboutLinks} />

        {/* Column 5: Download Our App */}
        <div>
          <h4 className="text-sm font-bold text-gray-900 mb-4">
            Download Our App
          </h4>
          <p className="text-sm text-gray-500 mb-4">
            Get the app for exclusive offers and a better shopping experience.
          </p>

          <div className="flex flex-col gap-2.5 items-start">
            <StoreBadge href="#" src={playStore} alt="Get it on Google Play" />
            <StoreBadge
              href="#"
              src={appStore}
              alt="Download on the App Store"
            />
          </div>
        </div>
      </div>

      {/* --- Bottom Section: Copyright & Legal --- */}
      <div className="border-t border-gray-200 mt-2 py-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 text-xs text-gray-500">
          {/* Left Side */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            <span>© 2026 Emox. All Rights Reserved.</span>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="hover:text-blue-600 transition-colors">
                Terms of Use
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>

          {/* Right Side (UAE & Language) */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:text-gray-700 transition-colors">
              <span className="text-base">🇦🇪</span>
              <span className="font-medium">UAE</span>
            </div>
            <div className="flex items-center gap-1 cursor-pointer hover:text-gray-700 transition-colors">
              <span className="font-medium">English</span>
              <FaChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
