import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
const Login = () => {
  const { signInWithEmail, signUpWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(prev => !prev);
  };
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInWithEmail(email, password)
      .then(userCredential => {
        const user = userCredential.user;
      })
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Login Successful",
          icon: "success",
          confirmButtonText: "Cool",
        });
        navigate("/");
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  const handleGoogleSignUp = () => {
    signUpWithGoogle()
      .then(() => {
        Swal.fire({
          title: "Success",
          text: "Login Successful",
          icon: "success",
          confirmButtonText: "Ok",
        });
        navigate("/");
      })
      .catch(error => {
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-travel-bg text-travel-text px-4">
      <div className="w-full max-w-md bg-travel-card p-8 rounded-xl shadow-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl mb-2">Welcome Back</h1>
          <p className="text-travel-muted text-sm">
            Login to continue exploring with ROAM
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm mb-1 text-travel-muted">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
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

          {/* Forgot */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-travel-accent hover:underline"
            >
              Forgot password?
            </button>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-travel-accent text-travel-text font-semibold rounded-md hover:scale-105 active:scale-100 transition-transform duration-200 cursor-pointer"
          >
            Login
          </button>
        </form>

        <h1 className="text-center py-2">or</h1>

        {/* Social (UI only) */}
        <button
          onClick={handleGoogleSignUp}
          type="button"
          className="w-full py-3 border border-travel-border hover:border-travel-accent rounded-md text-sm hover:bg-travel-accent transition-all duration-200 cursor-pointer hover:scale-105 active:scale-100"
        >
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-travel-muted mt-6">
          Don’t have an account?{" "}
          <Link
            to="/registration"
            className="text-travel-accent hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
