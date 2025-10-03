import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { setUser, login } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);
    console.log(Object.fromEntries(form));

    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        event.target.reset();
        navigate(location.state?.from?.pathname || "/", { replace: true });
      })
      .catch((error) => {
        console.log(error.message, error.code);
        if (error.code === "auth/invalid-credential") {
          setError("Invalid email or password. Please try again.");
        }

      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-fit shrink-0 shadow-2xl">
        <div className="card-body p-24">
          <h2 className="text-4xl font-bold">Login to your account</h2>
          <hr className="my-10 text-gray-200 font-semibold" />
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label text-xl font-bold text-gray-800">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="input w-full border-0 bg-gray-100"
              placeholder="Enter your email address"
            />
            <label className="label text-xl font-bold text-gray-800">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="input w-full border-0 bg-gray-100"
              placeholder="Enter your password"
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <div>
              <a className="text-sm link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/auth/register" className="text-red-500 link link-hover">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
