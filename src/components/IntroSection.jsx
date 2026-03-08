import Lottie from "lottie-react";
import travelAnimation from "../assets/lottie/travel.json";

const IntroSection = () => {
  return (
    <section className="w-full bg-travel-surface text-travel-text py-10 lg:py-20">
      <div className="w-full px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* TEXT */}
          <div>
            <p className="text-travel-accent text-sm uppercase tracking-widest mb-4">
              About ROAM
            </p>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6 uppercase">
              Explore the world with Confidence
            </h2>

            <p className="text-travel-muted max-w-xl mb-8 leading-relaxed">
              ROAM is a tourism management platform where travelers explore
              destinations, contribute tourist spots, and manage experiences —
              all in a refined, distraction-free environment.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-travel-accent">✦</span>
                <p className="text-travel-muted">
                  Curated tourist destinations
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-travel-accent">✦</span>
                <p className="text-travel-muted">
                  User-added travel experiences
                </p>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-travel-accent">✦</span>
                <p className="text-travel-muted">Country-wise exploration</p>
              </div>
            </div>
          </div>

          {/* LOTTIE (SUBTLE + SAFE) */}
          <div className="max-w-lg lg:max-w-xl mx-auto opacity-70">
            <Lottie animationData={travelAnimation} loop className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
