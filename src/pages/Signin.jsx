import { faGithub, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center font-montserrat px-8"
      style={{ backgroundColor: "#2c2b3c", color: "#ffffff" }}
    >
      <div
        className="w-full max-w-md p-6 rounded-lg shadow-lg"
        style={{ backgroundColor: "#1b2432" }}
      >
        <h2 className="text-2xl font-bold mb-4" style={{ color: "#b76d68" }}>
          Sign in to your account
        </h2>
        <p className="mb-4 text-sm">
          Or{" "}
          <Link
            to="/signup"
            className="hover:underline"
            style={{ color: "#b76d68" }}
          >
            sign up for a new account
          </Link>
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#121420",
                color: "#ffffff",
                borderColor: "#403f4c",
              }}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2"
              style={{
                backgroundColor: "#121420",
                color: "#ffffff",
                borderColor: "#403f4c",
              }}
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2"
              style={{ accentColor: "#b76d68" }}
            />
            <label htmlFor="remember" className="text-sm">
              Remember me
            </label>
            <a
              href="#"
              className="ml-auto text-sm hover:underline"
              style={{ color: "#b76d68" }}
            >
              Forgot your password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 rounded-lg font-semibold bg-[#b76d68] hover:bg-[#8a524e]"
          >
            Sign in
          </button>
          <div className="flex items-center justify-between my-4">
            <hr className="w-full" style={{ borderColor: "#403f4c" }} />
            <span className="w-full text-center text-sm mx-2">
              Or continue with
            </span>
            <hr className="w-full" style={{ borderColor: "#403f4c" }} />
          </div>
          <div className="flex justify-center gap-4">
            <button className="p-2 rounded-lg border border-[#fff] w-full hover:bg-[#121420]">
              <FontAwesomeIcon icon={faGithub} color="#b76d68" size="xl" />
            </button>
            <button className="p-2 rounded-lg border border-[#fff] w-full hover:bg-[#121420]">
              <FontAwesomeIcon icon={faGoogle} color="#b76d68" size="xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
