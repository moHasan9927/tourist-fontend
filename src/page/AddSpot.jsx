import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const AddSpot = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const location = form.location.value;
    const imgURL = form.imgURL.value;
    const description = form.description.value;
    const addedSpot = {
      createdBy: user.uid,
      name,
      location,
      imgURL,
      description,
    };
    console.log(addedSpot);
  };
  return (
    <div className="min-h-screen flex justify-center items-center px-4">
      <div className="w-full max-w-2xl bg-travel-surface/40 backdrop-blur-2xl p-6 md:p-8 rounded-2xl border border-travel-surface/50 shadow-xl">
        <h2 className="text-2xl md:text-3xl font-bold text-travel-accent mb-6 text-center">
          Add Tourist Spot
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Spot Name */}
          <div>
            <label className="block mb-1 text-travel-muted">Spot Name</label>
            <input
              name="name"
              required
              type="text"
              placeholder="Name"
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
              placeholder="Place"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            />
          </div>

          {/* Image URL */}
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

          {/* Category */}
          <div>
            <label className="block mb-1 text-travel-muted">Category</label>
            <select
              name="category"
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            >
              <option className="bg-travel-bg">Landmark</option>
              <option className="bg-travel-bg">Beach</option>
              <option className="bg-travel-bg">Mountain</option>
              <option className="bg-travel-bg">Museum</option>
              <option className="bg-travel-bg">Historical</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 text-travel-muted">Description</label>
            <textarea
              name="description"
              rows="4"
              placeholder="Write something about this tourist spot..."
              className="w-full px-4 py-2 rounded-lg bg-transparent border border-travel-surface focus:outline-none focus:border-travel-accent"
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-4 bg-travel-accent text-travel-text py-2 rounded-lg font-semibold hover:scale-105 active:scale-100 transition-transform duration-200 cursor-pointer"
          >
            Add Spot
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddSpot;
