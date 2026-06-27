import React, { useContext } from "react";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";

const AddSpot = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { user } = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;

    const tourists_spot_name = form.name.value;
    const country_Name = form.country.value;
    const location = form.location.value;
    const image = form.imgURL.value;
    const short_description = form.description.value;
    const average_cost = parseInt(form.cost.value);
    const seasonality = form.season.value;
    const travel_time = form.time.value;
    const totalVisitorsPerYear = parseInt(form.visitors.value);

    const addedSpot = {
      tourists_spot_name,
      country_Name,
      location,
      image,
      short_description,
      average_cost,
      seasonality,
      travel_time,
      totalVisitorsPerYear,
      userEmail: user?.email,
      userName: user?.displayName,
    };

    fetch(`${import.meta.env.VITE_API_URL}/tourist-spots`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedSpot),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Tourist Spot Added Successfully!",
            icon: "success",
            confirmButtonText: "OK",
          });

          form.reset();
        }
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-3xl bg-travel-surface/40 backdrop-blur-2xl p-6 md:p-8 rounded-2xl border border-travel-surface/50 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-travel-accent mb-6 text-center">
          Add Tourist Spot
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Tourist Spot Name */}
          <div>
            <label className="block mb-1 text-travel-muted">
              Tourist Spot Name
            </label>
            <input
              name="name"
              required
              type="text"
              placeholder="Spot Name"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Country Name */}
          <div>
            <label className="block mb-1 text-travel-muted">Country Name</label>
            <input
              name="country"
              required
              type="text"
              placeholder="Country"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 text-travel-muted">Location</label>
            <input
              name="location"
              required
              type="text"
              placeholder="City / Region"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Average Cost */}
          <div>
            <label className="block mb-1 text-travel-muted">Average Cost</label>
            <input
              name="cost"
              required
              type="number"
              placeholder="Cost in USD"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Seasonality */}
          <div>
            <label className="block mb-1 text-travel-muted">Best Season</label>
            <input
              name="season"
              required
              type="text"
              placeholder="Summer / Winter / All Season"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Travel Time */}
          <div>
            <label className="block mb-1 text-travel-muted">Travel Time</label>
            <input
              name="time"
              required
              type="text"
              placeholder="Example: 5 hours"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Total Visitors */}
          <div>
            <label className="block mb-1 text-travel-muted">
              Total Visitors Per Year
            </label>
            <input
              name="visitors"
              required
              type="number"
              placeholder="Visitors per year"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          <div>
            <label className="block mb-1 text-travel-muted">Image URL</label>
            <input
              name="imgURL"
              required
              type="text"
              placeholder="Photo URL"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block mb-1 text-travel-muted">
              Short Description
            </label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write something about this tourist spot..."
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            ></textarea>
          </div>

          <button
            type="submit"
            className="md:col-span-2 w-full mt-2 bg-travel-accent text-travel-text py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform duration-200 cursor-pointer"
          >
            Add Tourist Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpot;
