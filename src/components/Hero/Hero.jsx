import { useState, useEffect } from "react";
import { images } from "../../assets/images/images";
import { RiAppleLine } from "react-icons/ri";
import { clock } from "../../assets/icons/icon";

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: "24",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Set the countdown end time (24 hours from now)
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60),
      )
        .toString()
        .padStart(2, "0");

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60))
        .toString()
        .padStart(2, "0");

      const seconds = Math.floor((distance % (60 * 1000)) / 1000)
        .toString()
        .padStart(2, "0");

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full overflow-x-hidden px-2 py-2">
      {/* Hero */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full rounded-lg bg-gradient-to-br from-blue-500 to-[#be9cff] px-4 sm:px-6 md:px-16 py-8 md:py-10">
        {/* Text */}
        <div className="flex flex-col gap-2 text-white text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-2xl sm:text-3xl font-bold">
            <RiAppleLine />
            <h1>iPhone 16 Pro Max</h1>
          </div>

          <span className="text-2xl sm:text-3xl font-semibold">Titanium.</span>
          <span className="text-lg sm:text-2xl font-semibold">
            So strong. So light.
          </span>
          <span className="text-lg sm:text-2xl font-semibold">So Pro.</span>
        </div>

        {/* Image */}
        <div className="mt-6 md:mt-0 flex justify-center w-full md:w-auto">
          <img
            src={images.bg1}
            alt="iPhone"
            className="w-full max-w-[220px] sm:max-w-[300px] md:max-w-[380px] object-contain"
          />
        </div>
      </div>

      {/* Deal of the Day */}
      <div className="mt-4 rounded-lg bg-blue-200 p-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="flex items-center gap-3">
            <img className="w-6 h-6" src={clock} alt="clock" />
            <p className="text-lg sm:text-xl font-semibold">Deal of the Day</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="bg-gray-200 w-8 h-9 flex items-center justify-center">
              {timeLeft.hours}
            </span>
            :
            <span className="bg-gray-200 w-8 h-9 flex items-center justify-center">
              {timeLeft.minutes}
            </span>
            :
            <span className="bg-gray-200 w-8 h-9 flex items-center justify-center">
              {timeLeft.seconds}
            </span>
          </div>
        </div>

        {/* Product */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6">
          <img
            src={images.watch}
            alt="Apple Watch"
            className="w-40 sm:w-44 object-contain"
          />

          <div className="text-center sm:text-left flex-1">
            <h2 className="text-lg font-semibold">Apple Watch Series 10</h2>
            <p className="text-gray-700">GPS, 42mm, Jet Black</p>

            <div className="mt-2 flex flex-wrap justify-center sm:justify-start items-center gap-2">
              <span className="text-xl font-bold">$399.00 <span className="text-sm font-normal line-through decoration-red-500">$499.00</span></span>

              <span className="rounded bg-[#edc3c3] px-2 py-1 text-sm font-semibold text-[#ff0202]">
                20% OFF
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 w-full rounded bg-[#2a31ff] py-3 text-white font-semibold hover:bg-[#1f27db] transition">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default Hero;
