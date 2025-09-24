import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-fit shrink-0 shadow-2xl">
        <div className="card-body p-24">
            <h2 className="text-4xl font-bold">Login to your account</h2>
            <hr className="my-10 text-gray-200 font-semibold"/>
          <form className="fieldset">
            <label className="label text-xl font-bold text-gray-800">Email address</label>
            <input name="email" type="email" className="input w-full border-0 bg-gray-100" placeholder="Enter your email address" />
            <label className="label text-xl font-bold text-gray-800">Password</label>
            <input name="password" type="password" className="input w-full border-0 bg-gray-100" placeholder="Enter your password" />
            <div>
              <a className="text-sm link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Login</button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account? <Link to="/auth/register" className="text-red-500 link link-hover">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
