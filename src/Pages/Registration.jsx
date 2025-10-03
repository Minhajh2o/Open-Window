import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import { toast } from "react-toastify";

const Registration = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);
    console.log(Object.fromEntries(form));

    createNewUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
        // Firebase updates currentUser automatically
        setUser({ ...createdUser, displayName: name, photoURL: photo });
        event.target.reset();
        navigate("/", { replace: true });
        toast.success("User created successfully");
      })
      .catch((error) => {
        console.log("Error updating profile:", error);
      });
  })
  .catch((error) => {
        console.log(error.message, error.code);
        if (error.code === "auth/email-already-in-use") {
          toast.error("User already exists. Please login instead.");
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
              Full Name
            </label>
            <input
              name="name"
              type="text"
              className="input w-full border-0 bg-gray-100"
              placeholder="Enter your full name"
            />
            <label className="label text-xl font-bold text-gray-800">
              Photo URL
            </label>
            <input
              name="photo"
              type="text"
              className="input w-full border-0 bg-gray-100"
              placeholder="Enter your photo URL"
            />
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
            <div>
              <a className="text-sm link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Register</button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <Link to="/auth/login" className="text-red-500 link link-hover">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
