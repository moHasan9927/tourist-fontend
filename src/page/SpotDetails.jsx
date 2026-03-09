import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const SpotDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [spot, setSpot] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`http://localhost:5000/tourist-spots/${id}`)
      .then(res => res.json())
      .then(data => setSpot(data));
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this tourist spot?",
    );

    if (!confirmDelete) return;

    fetch(`http://localhost:5000/tourist-spots/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          alert("Spot deleted successfully");
          navigate("/my_list");
        }
      });
  };

  if (!spot) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-travel-muted text-lg">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="max-w-5xl mx-auto bg-travel-surface/40 backdrop-blur-2xl border border-travel-surface/50 rounded-2xl shadow-xl overflow-hidden">
        {/* Image */}
        <img
          src={spot.image || "https://i.ibb.co/5Y3R7qK/travel.jpg"}
          alt={spot.tourists_spot_name}
          className="w-full h-80 object-cover"
        />

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
          <h2 className="text-3xl font-bold text-travel-accent">
            {spot.tourists_spot_name}
          </h2>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-3 text-travel-muted">
            <p>
              📍 {spot.location}, {spot.country_Name}
            </p>

            <p>💰 Average Cost: ${spot.average_cost}</p>

            <p>🌤 Best Season: {spot.seasonality}</p>

            <p>⏱ Travel Time: {spot.travel_time}</p>

            <p>👥 Visitors per year: {spot.totalVisitorsPerYear}</p>
          </div>

          {/* Description */}
          <p className="text-travel-text leading-relaxed">
            {spot.short_description}
          </p>

          {/* Creator */}
          <div className="text-sm text-travel-muted">
            Added by: {spot.userName}
          </div>

          {/* Buttons ONLY if owner */}
          {user?.email === spot.userEmail && (
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => navigate(`/update-spot/${id}`)}
                className="flex-1 bg-travel-accent text-travel-text py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform"
              >
                Update
              </button>

              <button
                onClick={handleDelete}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform"
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotDetails;
