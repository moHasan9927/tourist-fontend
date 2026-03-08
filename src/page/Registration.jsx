import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import AuthContext from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
const Register = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [name, setName] = useState("");
  const { user, signUpWithEmail, signUpWithGoogle } = useContext(AuthContext);
  const handleShowPass = () => {
    setShowPass(prev => !prev);
  };
  const handleShowConfirmPass = () => {
    setShowConfirmPass(prev => !prev);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    // const obj = {
    //   name,
    //   email,
    //   password,
    //   confirmPassword,
    // };
    if (password !== confirmPassword) {
      Swal.fire({
        title: "Error!",
        text: "Passwords do not match. Please try again.",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return;
    }
    signUpWithEmail(email, password)
      .then(userCredential => {
        const result = userCredential.user;
        return updateProfile(result, {
          displayName: name,
          photoURL: photo,
        });
      })
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Registration Successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
    setName("");
    form.reset();
    console.log(user);
  };
  const handleGoogleSignUp = () => {
    signUpWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Registration Successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-travel-bg text-travel-text px-4">
      <div className="w-full max-w-md bg-travel-card  p-8 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl mb-2">Create Account</h1>
          <p className="text-travel-muted text-sm">
            Join ROAM and start exploring the world
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm mb-1 text-travel-muted">
              Full Name
            </label>

            <input
              required
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-3 bg-travel-surface text-travel-text rounded-md outline-none border border-travel-border focus:border-travel-accent transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-travel-muted">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 bg-travel-surface text-travel-text rounded-md outline-none border border-travel-border focus:border-travel-accent transition-colors"
            />
          </div>
          {/* photo */}
          <div>
            <label className="block text-sm mb-1 text-travel-muted">
              Photo
            </label>
            <input
              required
              type="text"
              name="photo"
              placeholder="your photo URL"
              className="w-full px-4 py-3 bg-travel-surface text-travel-text rounded-md outline-none border border-travel-border focus:border-travel-accent transition-colors"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm mb-1 text-travel-muted">
              Password
            </label>
            <div className="relative">
              <input
                required
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-travel-surface text-travel-text rounded-md outline-none border border-travel-border focus:border-travel-accent transition-colors  "
              />
              <div
                onClick={handleShowPass}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-travel-accent text-travel-text rounded-full cursor-pointer hover:bg-transparent border-2 border-travel-accent transition-all duration-200"
              >
                {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </div>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm mb-1 text-travel-muted">
              Confirm Password
            </label>
            <div className="relative">
              <input
                required
                name="confirmPassword"
                type={showConfirmPass ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-travel-surface text-travel-text rounded-md outline-none border border-travel-border focus:border-travel-accent transition-colors  "
              />
              <div
                onClick={handleShowConfirmPass}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-travel-accent text-travel-text rounded-full cursor-pointer hover:bg-transparent border-2 border-travel-accent transition-all duration-200"
              >
                {showConfirmPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </div>
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-travel-accent text-travel-text font-semibold rounded-md hover:scale-105 active:scale-100 transition-transform duration-200 cursor-pointer"
          >
            Register
          </button>
        </form>

        <h1 className="text-center py-2">or</h1>
        <button
          onClick={handleGoogleSignUp}
          type="button"
          className="w-full py-3 border border-travel-border hover:border-travel-accent rounded-md text-sm hover:bg-travel-accent transition-all duration-200 cursor-pointer hover:scale-105 active:scale-100"
        >
          Continue with Google
        </button>

        <p className="text-center text-sm text-travel-muted mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-travel-accent hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
