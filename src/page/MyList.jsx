import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
const MyList = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:5000/my-spots/${user.email}`)
      .then(res => res.json())
      .then(data => setSpots(data));
  }, [user]);

  const handleDelete = id => {
    fetch(`http://localhost:5000/tourist-spots/${id}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          const remaining = spots.filter(spot => spot._id !== id);
          setSpots(remaining);
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

              <p className="text-travel-muted text-sm">📍 {spot.location}</p>

              <p className="text-travel-muted text-sm">
                🌍 {spot.country_Name}
              </p>

              <p className="text-travel-muted text-sm">
                💰 ${spot.average_cost}
              </p>

              <p className="text-travel-muted text-sm">
                👥 {spot.totalVisitorsPerYear} visitors/year
              </p>

              <div className="flex gap-3 mt-4">
                <Link
                  to={`/spot-details/${spot._id}`}
                  className="flex-1 text-center bg-travel-accent text-travel-text py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform"
                >
                  View Details
                </Link>

                <button
                  onClick={() => handleDelete(spot._id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform"
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
