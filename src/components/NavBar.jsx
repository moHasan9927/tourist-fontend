import React, { useContext, useState } from "react";
import logo from "../../src/logo/logo.png";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { TiThMenu } from "react-icons/ti";
import { RxCross1 } from "react-icons/rx";
import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";
import { signOut } from "firebase/auth";
import auth from "../Firebase.console";
import Swal from "sweetalert2";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [showNav, setShowNav] = useState(false);
  const { user, loading } = useContext(AuthContext);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Log Out Successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex justify-between items-center bg-travel-surface/20 backdrop-blur-2xl sticky top-0 z-40 p-3 md:p-4 lg:p-5 border-b border-travel-surface/50">
      <section className="">
        <Link to="/" className="flex gap-2 items-center">
          <img className="h-7 md:h-8 lg:h-10" src={logo} alt="" />
          <h1 className="font-['Playfair_Display'] text-travel-accent text-2xl md:text-3xl lg:text-4xl font-bold">
            ROAM
          </h1>
        </Link>
      </section>

      {/* middle section */}
      <section className="gap-8 items-center hidden md:hidden lg:flex xl:flex">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-travel-accent-soft text-lg ${
              isActive
                ? "text-travel-accent underline underline-offset-8 "
                : "text-travel-muted"
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/all_spot"
          className={({ isActive }) =>
            `hover:text-travel-accent text-lg ${
              isActive
                ? "text-travel-accent underline underline-offset-8 "
                : "text-travel-muted"
            }`
          }
        >
          All Tourist Spots
        </NavLink>

        {!user && !loading && (
          <NavLink
            to="/registration"
            className={({ isActive }) =>
              `hover:text-travel-accent text-lg ${
                isActive
                  ? "text-travel-accent underline underline-offset-8 "
                  : "text-travel-muted"
              }`
            }
          >
            Register
          </NavLink>
        )}

        {user && !loading && (
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `hover:text-travel-accent text-lg ${
                isActive
                  ? "text-travel-accent underline underline-offset-8 "
                  : "text-travel-muted"
              }`
            }
          >
            Profile
          </NavLink>
        )}

        {user && !loading && (
          <NavLink
            to="/add_spot"
            className={({ isActive }) =>
              `hover:text-travel-accent text-lg ${
                isActive
                  ? "text-travel-accent underline underline-offset-8 "
                  : "text-travel-muted"
              }`
            }
          >
            Add Tourist Spot
          </NavLink>
        )}

        {user && !loading && (
          <NavLink
            to="/my_list"
            className={({ isActive }) =>
              `hover:text-travel-accent text-lg ${
                isActive
                  ? "text-travel-accent underline underline-offset-8"
                  : "text-travel-muted"
              }`
            }
          >
            My List
          </NavLink>
        )}
      </section>

      {/* right section */}
      <section className="flex items-center gap-1 lg:gap-2 ">
        <div
          onClick={handleTheme}
          className="text-xl md:text-2xl lg:text-3xl cursor-pointer"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </div>

        <div className="hidden lg:flex gap-3 items-center ">
          {!user && !loading && (
            <div className=" bg-travel-accent p-1 rounded-full text-travel-text">
              <CgProfile className="text-2xl" />
            </div>
          )}

          {user && !loading && (
            <div className="h-10 w-10 rounded-full overflow-hidden">
              <img className="object-cover" src={user?.photoURL} alt="" />
            </div>
          )}

          {user ? (
            <Link
              to="/"
              onClick={handleLogOut}
              className="px-3 py-2 bg-travel-accent rounded-lg font-semibold border border-travel-accent-soft hover:scale-105 active:scale-100 cursor-pointer transition-transform duration-200 text-travel-text"
            >
              Log Out
            </Link>
          ) : (
            <Link
              to="/login"
              className="px-3 py-2 bg-travel-accent rounded-lg font-semibold border border-travel-accent-soft hover:scale-105 active:scale-100 cursor-pointer transition-transform duration-200 text-travel-text"
            >
              Log In
            </Link>
          )}
        </div>

        <div
          onClick={() => setShowNav(!showNav)}
          className="lg:hidden text-xl md:text-2xl"
        >
          {showNav ? <RxCross1 /> : <TiThMenu />}
        </div>
      </section>

      {/* Mobile nav */}
      {showNav && (
        <section className="h-screen absolute inset-0 backdrop-blur-3xl bg-travel-bg text flex justify-between p-6 lg:hidden xl:hidden">
          <div className="flex flex-col">
            <NavLink
              to="/"
              onClick={() => setShowNav(!showNav)}
              className={({ isActive }) =>
                `py-3 border-b border-b-travel-accent ${
                  isActive
                    ? "bg-travel-accent text-travel-text px-3"
                    : "bg-transparent"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/all_spot"
              onClick={() => setShowNav(!showNav)}
              className={({ isActive }) =>
                `py-3 border-b border-b-travel-accent ${
                  isActive
                    ? "bg-travel-accent text-travel-text px-3"
                    : "bg-transparent"
                }`
              }
            >
              All Tourist Spots
            </NavLink>

            {!user && !loading && (
              <NavLink
                to="/registration"
                onClick={() => setShowNav(!showNav)}
                className={({ isActive }) =>
                  `py-3 border-b border-b-travel-accent ${
                    isActive
                      ? "bg-travel-accent text-travel-text px-3"
                      : "bg-transparent"
                  }`
                }
              >
                Register
              </NavLink>
            )}

            {user && !loading && (
              <NavLink
                to="/add_spot"
                onClick={() => setShowNav(!showNav)}
                className={({ isActive }) =>
                  `py-3 border-b border-b-travel-accent ${
                    isActive
                      ? "bg-travel-accent  text-travel-text px-3"
                      : "bg-transparent"
                  }`
                }
              >
                Add Tourist Spot
              </NavLink>
            )}

            {user && !loading && (
              <NavLink
                to="/profile"
                onClick={() => setShowNav(!showNav)}
                className={({ isActive }) =>
                  `py-3 border-b border-b-travel-accent ${
                    isActive
                      ? "bg-travel-accent text-travel-text px-3"
                      : "bg-transparent"
                  }`
                }
              >
                Profile
              </NavLink>
            )}

            {user && !loading && (
              <NavLink
                to="/my_list"
                onClick={() => setShowNav(!showNav)}
                className={({ isActive }) =>
                  `py-3 border-b border-b-travel-accent ${
                    isActive
                      ? "bg-travel-accent text-travel-text px-3"
                      : "bg-transparent"
                  }`
                }
              >
                My List
              </NavLink>
            )}

            <div>
              <div className="flex py-3 lg:flex gap-3 items-center ">
                {!user && !loading && (
                  <CgProfile className="text-4xl bg-travel-accent text-travel-text p-1 rounded-full" />
                )}

                {user && !loading && (
                  <div className="h-10 w-10 rounded-full overflow-hidden">
                    <img className="object-cover" src={user?.photoURL} alt="" />
                  </div>
                )}

                {!user && !loading && (
                  <Link
                    onClick={() => setShowNav(!showNav)}
                    to="/login"
                    className="bg-travel-accent text-white px-3 py-2 rounded-md"
                  >
                    Login
                  </Link>
                )}

                {user && !loading && (
                  <button
                    onClick={() => {
                      handleLogOut();
                      setShowNav(false);
                    }}
                    className="bg-travel-accent text-white px-3 py-2 rounded-md"
                  >
                    Log Out
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="">
            <div
              onClick={() => setShowNav(!showNav)}
              className="bg-travel-accent text-travel-text p-2 rounded-full"
            >
              <RxCross1 />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NavBar;
