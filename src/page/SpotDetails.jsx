import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaClock, FaCloud } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
const SpotDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [spot, setSpot] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${import.meta.env.VITE_API_URL}/tourist-spots/${id}`)
      .then(res => res.json())
      .then(data => setSpot(data));
  }, [id]);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this tourist spot!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(result => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/tourist-spots/${id}`, {
          method: "DELETE",
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Tourist Spot deleted successfully.",
                icon: "success",
                confirmButtonText: "OK",
              }).then(() => {
                navigate("/my_list");
              });
            }
          });
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
            <p className="flex items-center gap-2">
              <FaLocationDot />{" "}
              <p>
                {spot.location}, {spot.country_Name}
              </p>
            </p>

            <p className="flex items-center gap-2">
              <MdOutlineAttachMoney />
              <p> Average Cost: ${spot.average_cost}</p>
            </p>

            <p className="flex items-center gap-2">
              <FaCloud />
              <p>Best Season: {spot.seasonality}</p>
            </p>

            <p className="flex items-center gap-2">
              <FaClock />
              <p>Travel Time: {spot.travel_time}</p>
            </p>

            <p className="flex items-center gap-2">
              <IoPeopleSharp />{" "}
              <p>Visitors per year: {spot.totalVisitorsPerYear}</p>
            </p>
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
