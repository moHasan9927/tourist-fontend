import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();

  const [spot, setSpot] = useState(null);

  useEffect(() => {
    if (!id) return;

    fetch(`${API_URL}/tourist-spots/${id}`)
      .then(res => res.json())
      .then(data => setSpot(data));
  }, [id, API_URL]);

  const handleUpdate = e => {
    e.preventDefault();

    const form = e.target;

    const updatedSpot = {
      tourists_spot_name: form.name.value,
      country_Name: form.country.value,
      location: form.location.value,
      image: form.imgURL.value,
      short_description: form.description.value,
      average_cost: parseInt(form.cost.value),
      seasonality: form.season.value,
      travel_time: form.time.value,
      totalVisitorsPerYear: parseInt(form.visitors.value),
    };

    fetch(`${API_URL}/tourist-spots/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > -1) {
          Swal.fire({
            title: "Updated!",
            text: "Tourist Spot Updated Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          }).then(() => {
            navigate(-1);
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
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-3xl bg-travel-surface/40 backdrop-blur-2xl p-6 md:p-8 rounded-2xl border border-travel-surface/50 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-travel-accent mb-6 text-center">
          Update Tourist Spot
        </h2>

        <form
          onSubmit={handleUpdate}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Tourist Spot Name */}
          <div>
            <label className="block mb-1 text-travel-muted">
              Tourist Spot Name
            </label>
            <input
              name="name"
              defaultValue={spot.tourists_spot_name}
              required
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block mb-1 text-travel-muted">Country</label>
            <input
              name="country"
              defaultValue={spot.country_Name}
              required
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 text-travel-muted">Location</label>
            <input
              name="location"
              defaultValue={spot.location}
              required
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Average Cost */}
          <div>
            <label className="block mb-1 text-travel-muted">Average Cost</label>
            <input
              name="cost"
              defaultValue={spot.average_cost}
              required
              type="number"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Season */}
          <div>
            <label className="block mb-1 text-travel-muted">Best Season</label>
            <input
              name="season"
              defaultValue={spot.seasonality}
              required
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Travel Time */}
          <div>
            <label className="block mb-1 text-travel-muted">Travel Time</label>
            <input
              name="time"
              defaultValue={spot.travel_time}
              required
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Visitors */}
          <div>
            <label className="block mb-1 text-travel-muted">
              Visitors Per Year
            </label>
            <input
              name="visitors"
              defaultValue={spot.totalVisitorsPerYear}
              required
              type="number"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-1 text-travel-muted">Image URL</label>
            <input
              name="imgURL"
              defaultValue={spot.image}
              required
              type="text"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-travel-muted">Description</label>
            <textarea
              name="description"
              rows="4"
              defaultValue={spot.short_description}
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="md:col-span-2 w-full mt-2 bg-travel-accent text-travel-text py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform duration-200 cursor-pointer"
          >
            Update Tourist Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSpot;
