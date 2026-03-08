import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
const SwiperSection = () => {
  return (
    <div>
      <div className="w-full overflow-hidden mt-2">
        <Swiper
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          className="w-full h-56 md:h-80 lg:h-130 overflow-hidden"
        >
          {/* SLIDE 1 */}
          <SwiperSlide className="relative">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/4wq6qnzQ/old-castle-mountians.jpg"
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <p className="text-travel-accent font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">
                Exclusive Destinations
              </p>
              <h1 className="font-serif text-white text-xl md:text-4xl lg:text-5xl mb-3">
                Luxury Living Redefined
              </h1>
              <p className="text-white/80 max-w-xl text-sm md:text-base">
                Discover handpicked destinations crafted for unforgettable
                journeys.
              </p>
            </div>
          </SwiperSlide>

          {/* SLIDE 2 */}
          <SwiperSlide className="relative">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/vxRFy0fQ/nature-natural-asian-green-water-river.jpg"
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <p className="text-travel-accent font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">
                City Escapes
              </p>
              <h1 className="font-serif text-white text-xl md:text-4xl lg:text-5xl mb-3">
                Elevated Urban Adventures
              </h1>
              <p className="text-white/80 max-w-xl text-sm md:text-base">
                Explore iconic cities with curated experiences and comfort.
              </p>
            </div>
          </SwiperSlide>

          {/* SLIDE 3 */}
          <SwiperSlide className="relative">
            <img
              className="w-full h-full object-cover"
              src="https://i.ibb.co.com/KzVYsbMV/aerial-view-vang-vieng-with-mountains-balloon-sunset.jpg"
              alt=""
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
              <p className="text-travel-accent font-semibold text-xs md:text-sm uppercase tracking-widest mb-2">
                Nature Retreats
              </p>
              <h1 className="font-serif text-white text-xl md:text-4xl lg:text-5xl mb-3">
                Journey Beyond Boundaries
              </h1>
              <p className="text-white/80 max-w-xl text-sm md:text-base">
                Immerse yourself in breathtaking landscapes and serene escapes.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperSection;
