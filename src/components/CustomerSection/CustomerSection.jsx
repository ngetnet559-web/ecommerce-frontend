import { testimonials, brands } from "../../data/customerService.js";

import { FaStar, FaChevronRight } from "react-icons/fa6";

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => (
        <FaStar
          key={index}
          className={`w-4 h-4 ${index < rating ? "fill-[#FBBF24]" : "fill-[gray]"}`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ quote, name, avatarUrl, rating }) => {
  return (
    <div className="flex flex-col h-full">
      <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow">
        "{quote}"
      </p>
      <div className="mt-auto">
        <StarRating rating={rating} />
        <div className="flex items-center gap-3 mt-3">
          <img
            src={avatarUrl}
            alt={name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-xs font-medium text-gray-800">{name}</span>
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---

export default function CustomerAndBrandsSection() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 bg-gray-50">
      {/* Left Section: Testimonials */}
      <div className="flex-1 bg-slate-100 rounded-xl border border-gray-200 p-6 shadow-sm">
        <h2 className="text-base font-bold text-gray-900 mb-6">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              quote={item.quote}
              name={item.name}
              rating={item.rating}
              avatarUrl={item.avatarUrl}
            />
          ))}
        </div>
      </div>

      {/* Right Section: Top Brands */}
      <div className="flex-1 bg-slate-100 rounded-xl border border-gray-200 p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-base font-bold text-gray-900">Top Brands</h2>
          <button
            type="button"
            className="text-sm font-medium text-blue-600 hover:underline flex items-center cursor-pointer"
          >
            View All
            <FaChevronRight className="w-3 h-3 ml-1" />
          </button>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 w-full px-1">
          {brands.map((brand) => {
            if (brand.logoUrl) {
              return (
                <img
                  key={brand.id}
                  src={brand.logoUrl}
                  alt={brand.alt}
                  className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                />
              );
            } else if (brand.hasArrow) {
              return (
                <div
                  key={brand.id}
                  className={`flex items-center gap-1 text-2xl font-bold tracking-tight ${brand.color} opacity-80 hover:opacity-100 transition-opacity cursor-pointer leading-tight`}
                >
                  {brand.name}
                  <FaChevronRight className="w-3.5 h-3.5" />
                </div>
              );
            } else {
              return (
                <div
                  key={brand.id}
                  className={`text-2xl font-bold tracking-tight ${brand.color} opacity-80 hover:opacity-100 transition-opacity cursor-pointer leading-tight`}
                >
                  {brand.name}
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
