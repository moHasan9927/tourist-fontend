import React, { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import auth from "../Firebase.console";
import { updateProfile } from "firebase/auth";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleEdit = () => {
    setEdit(prev => !prev);
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    try {
      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center px-10">
        <section className="space-y-2 shadow shadow-travel-accent-soft flex flex-col justify-center rounded-xl p-10 mt-10">
          <div className="flex justify-center items-center ">
            {user && (
              <div className="h-20 w-20 overflow-hidden rounded-full">
                <img
                  className="h-full w-full object-cover"
                  src={user.photoURL}
                  alt="profile"
                />
              </div>
            )}
          </div>

          <h1 className="text-lg font-semibold text-travel-accent">
            Email:{" "}
            {user && (
              <span className="text-md font-medium text-travel-text">
                {user.email}
              </span>
            )}
          </h1>

          <h1 className="text-lg font-semibold text-travel-accent">
            Name:{" "}
            {user && (
              <span className="text-md font-medium text-travel-text">
                {user.displayName}
              </span>
            )}
          </h1>

          <button
            onClick={handleEdit}
            className="bg-travel-accent py-2 rounded-lg shadow-xl font-semibold text-lg cursor-pointer hover:scale-105 active:scale-100 transition-all duration-150"
          >
            {edit ? "Cancel" : "Edit"}
          </button>
        </section>

        {edit && (
          <form
            onSubmit={handleSubmit}
            className="space-y-2 shadow shadow-travel-accent-soft flex flex-col justify-center rounded-xl p-10 mt-10"
          >
            <div>
              <label className="block text-sm mb-1 text-travel-muted">
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                placeholder="Name"
                className="w-full px-4 py-3 bg-travel-surface text-travel-text rounded-md outline-none border border-travel-border focus:border-travel-accent transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-travel-muted">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={user?.photoURL}
                placeholder="Photo URL"
                className="w-full px-4 py-3 bg-travel-surface text-travel-text rounded-md outline-none border border-travel-border focus:border-travel-accent transition-colors"
              />
            </div>

            <button
              type="submit"
              className="self-center bg-travel-accent py-2 px-4 rounded-lg shadow-xl font-semibold text-lg cursor-pointer hover:scale-105 active:scale-100 transition-all duration-150"
            >
              Save
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Profile;
