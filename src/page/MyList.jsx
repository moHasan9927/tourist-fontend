import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import Swal from "sweetalert2";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAttachMoney } from "react-icons/md";
import { FaClock, FaCloud } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
const MyList = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`${API_URL}/my-spots/${user.email}`)
      .then(res => res.json())
      .then(data => setSpots(data));
  }, [API_URL, user.email]);

  const handleDelete = id => {
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
              const remaining = spots.filter(spot => spot._id !== id);
              setSpots(remaining);

              Swal.fire({
                title: "Deleted!",
                text: "Tourist spot deleted successfully.",
                icon: "success",
                confirmButtonText: "OK",
              });
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-travel-accent mb-10">
        My Added Tourist Spots
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {spots.map(spot => (
          <div
            key={spot._id}
            className="bg-travel-surface/40 backdrop-blur-2xl border border-travel-surface/50 rounded-2xl shadow-lg overflow-hidden"
          >
            <img
              src={spot.image}
              alt={spot.tourists_spot_name}
              className="h-48 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h3 className="text-xl font-semibold text-travel-text">
                {spot.tourists_spot_name}
              </h3>

              <p className="text-travel-muted text-sm flex gap-2 items-center">
                <FaLocationDot />{" "}
                <p>
                  {spot.location}, {spot.country_Name}
                </p>
              </p>

              <p className="text-travel-muted text-sm flex gap-2 items-center">
                <MdOutlineAttachMoney />
                <p> Average Cost: ${spot.average_cost}</p>
              </p>

              <p className="text-travel-muted text-sm flex gap-2 items-center">
                <FaCloud />
                <p>Best Season: {spot.seasonality}</p>
              </p>
              <p className="text-travel-muted text-sm flex gap-2 items-center">
                <FaClock />
                <p>Travel Time: {spot.travel_time}</p>
              </p>

              <div className="flex gap-3 mt-4">
                <Link
                  to={`/spot-details/${spot._id}`}
                  className="flex-1 text-center bg-travel-accent text-travel-text py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform duration-300"
                >
                  View Details
                </Link>

                <button
                  onClick={() => handleDelete(spot._id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 duration-300 transition-transform cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {spots.length === 0 && (
        <p className="text-center text-travel-muted mt-10">
          You haven't added any tourist spots yet.
        </p>
      )}
    </div>
  );
};

export default MyList;
