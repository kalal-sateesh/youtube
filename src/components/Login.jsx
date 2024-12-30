import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const sidebar = useSelector((state) => state.navbar.sidebar);

  const navigate = useNavigate();

  const handleNavigateToSignup = () => {
    navigate("/register");
  };

  return (
    <div
      className={`absolute top-[100px] ${
        sidebar
          ? `sm:w-[400px] w-[210px] left-[37%]`
          : `sm:w-[400px] w-[250px] sm:left-[33%] left-[22%]`
      } h-auto bg-[#FFFFFF] rounded-md p-6 flex flex-col gap-6 shadow-xl`}
    >
      <div className="sm:text-2xl text-sm font-bold">
        Signin to your account
      </div>
      <form action="" className="flex flex-col gap-6">
        <div className="flex gap-2 flex-col">
          <label
            htmlFor="email"
            className="text-gray-700 font-semibold text-sm"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            placeholder="name@company.com"
            className="h-[50px] px-3 bg-[#F9FAFB] focus:outline-blue-400 outline-gray-300 rounded-md border-[1px] border-gray-300"
            required
          />
        </div>
        <div className="flex gap-2 flex-col">
          <label
            htmlFor="password"
            className="text-gray-700 font-semibold text-sm"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="h-[50px] px-3 bg-[#F9FAFB] focus:outline-blue-400 outline-gray-300 rounded-md border-[1px] border-gray-300"
            required
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-[#2563EB] text-white w-[100%] h-[50px] rounded-lg hover:bg-[#1A56DB]"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="text-gray-400 sm:text-sm text-xs">
        Don’t have an account yet?{" "}
        <span
          className="text-blue-600 hover:cursor-pointer hover:underline"
          onClick={handleNavigateToSignup}
        >
          Sign up
        </span>
      </div>
    </div>
  );
};

export default Login;
