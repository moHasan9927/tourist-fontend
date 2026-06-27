import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaCloud } from "react-icons/fa";
const AllSpot = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL);
    fetch(`${API_URL}/tourist-spots`)
      .then(res => res.json())
      .then(data => setSpots(data));
  }, [API_URL]);

  return (
    <div className="min-h-screen px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-travel-accent mb-10">
        All Tourist Spots
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {spots.map(spot => (
          <div
            key={spot._id}
            className="bg-travel-surface/40 backdrop-blur-2xl border border-travel-surface/50 rounded-2xl shadow-lg overflow-hidden"
          >
            {/* Image */}
            <img
              src={spot.image || "https://i.ibb.co/5Y3R7qK/travel.jpg"}
              alt={spot.tourists_spot_name}
              className="h-52 w-full object-cover"
            />

            {/* Card Content */}
            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-travel-text">
                {spot.tourists_spot_name}
              </h3>

              <p className="text-travel-muted text-sm flex items-center gap-2">
                <FaLocationDot />{" "}
                <p>
                  {spot.location}, {spot.country_Name}
                </p>
              </p>

              <p className="text-travel-muted text-sm flex items-center gap-2">
                <MdOutlineAttachMoney />
                <p> Average Cost: ${spot.average_cost}</p>
              </p>

              <p className="text-travel-muted text-sm flex items-center gap-2">
                <FaCloud />
                <p>Best Season: {spot.seasonality}</p>
              </p>

              {/* Button */}
              <Link
                to={`/spot-details/${spot._id}`}
                className="block text-center mt-3 bg-travel-accent text-travel-text py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {spots.length === 0 && (
        <p className="text-center text-travel-muted mt-10">
          No tourist spots available.
        </p>
      )}
    </div>
  );
};

export default AllSpot;
