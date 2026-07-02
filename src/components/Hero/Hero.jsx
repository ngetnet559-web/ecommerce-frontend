import { useState, useEffect } from "react";
import { images } from "../../assets/images/images";
import { RiAppleLine } from "react-icons/ri";
import { clock } from "../../assets/icons/icon";

const phoneImages = [images.bg1, images.bg2, images.bg3];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    hours: "24",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // IMAGE SLIDER
    const imageInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % phoneImages.length);
    }, 3000);

    // COUNTDOWN TIMER
    const endTime = new Date().getTime() + 24 * 60 * 60 * 1000;

    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime - now;

      if (distance <= 0) {
        clearInterval(timerInterval);
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

    // CLEANUP (IMPORTANT)
    return () => {
      clearInterval(imageInterval);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className="w-full lg:flex gap-4 overflow-x-hidden px-2 py-2">
      {/* Hero */}
      <div className="flex flex-col lg:flex-1 md:flex-row items-center justify-between w-full rounded-lg bg-gradient-to-br from-blue-500 to-[#be9cff] px-4 sm:px-6 md:px-16 py-8 md:py-10 mb-4 lg:mb-0">
        {/* Text */}
        <div className=" relative flex flex-col gap-2 text-white text-center md:text-left">
          <div className="flex  justify-center md:justify-start lg: gap-2 text-2xl sm:text-3xl lg:text-xl lg:absolute -top-20 -left-10 font-bold lg:font-normal">
            <RiAppleLine />
            <h1>iPhone 16 Pro Max</h1>
          </div>

          <span className="text-2xl sm:text-3xl font-semibold">Titanium.</span>
          <span className="text-lg lg:text-2xl lg:font-bold sm:text-2xl font-semibold">
            So strong. So light.
          </span>
          <span className="text-lg sm:text-2xl font-semibold">So Pro.</span>
          <div className="">
            <p>from</p>
            <h1 className="text-3xl font-bold">
              $50,769*{" "}
              <span className="font-light line-through decoration-red-300 text-xl">
                $56,999
              </span>
            </h1>

            <p className="inline-block p-2 rounded-2xl mt-2 bg-transparent/10 text-center text-sm">
              Save $6,230(11%)
            </p>

            <button className="border font-bold pl-6 pr-6 pt-3 pb-3  rounded-2xl mt-6  bg-blue-800 hover:bg-slate-700 text-white font-bold px-2 py-2.5 rounded-md mt-20 inline-block transition-colors duration-300 shadow-md cursor-pointer">
              Shop Now
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="mt-6 md:mt-0 flex flex-col items-center justify-center w-full md:w-auto">
          <div className="relative lg:-z-0 w-full max-w-[220px] sm:max-w-[300px] md:max-w-[380px] h-[260px] sm:h-[320px] md:h-[380px] overflow-hidden">
            <div
              className="flex h-full transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${current * 100}%)`,
              }}
            >
              {phoneImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`iPhone ${index}`}
                  className="w-full h-full flex-shrink-0 object-contain"
                />
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {phoneImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition ${
                  current === index ? "bg-white scale-110" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Deal of the Day */}
      <div className=" lg:flex-1 rounded-lg bg-slate-200 px-4 sm:px-6 md:px-16 py-8 md:py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 lg:gap-20">
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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 lg:gap-32 lg:justify-center mt-6">
          <img
            src={images.watch}
            alt="Apple Watch"
            className="w-40 sm:w-44 object-contain"
          />

          <div className="text-center sm:text-left flex-1">
            <h2 className="text-lg font-semibold">Apple Watch Series 10</h2>
            <p className="text-gray-700">GPS, 42mm, Jet Black</p>

            <div className="mt-2 flex flex-wrap justify-center sm:justify-start items-center gap-2">
              <span className="text-xl font-bold">
                $399.00{" "}
                <span className="text-sm font-normal line-through decoration-red-500">
                  $499.00
                </span>
              </span>

              <span className="rounded bg-[#edc3c3] px-2 py-1 text-sm font-semibold text-[#ff0202]">
                20% OFF
              </span>
            </div>
          </div>
        </div>

        {/* Button */}
        <button className="rounded hover:bg-slate-700 mt-20 w-full rounded bg-[#2a31ff] py-3 text-white font-semibold hover:bg-[#1f27db] transition-colors duration-300  hover:cursor-pointer">
          View Deal
        </button>
      </div>
    </div>
  );
};

export default Hero;
