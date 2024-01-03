import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import loginSvg from "../../assets/images/login/login.svg";
import googleIcon from "../../assets/icons/google-icon.png";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <section id="login" className="mx-auto max-w-7xl">
        <Helmet>
          <title>Login || Car Doctors</title>
        </Helmet>
        <div className="flex items-center gap-20 px-5 py-10 my-20 md:px-16 lg:px-0">
          <div className="hidden lg:block">
            <img src={loginSvg} alt="" />
          </div>
          {/* <div> */}
          <div className="flex-1">
            {/* <div className="px-5 py-6 md:px-0"> */}
            {/* <div className=""></div> */}
            <div className="">
              <div className="w-full py-10 rounded shadow md:p-20">
                <h3 className="mb-4 text-3xl font-semibold text-center md:mb-8 md:font-bold md:text-4xl">
                  Login
                </h3>
                <form onSubmit={handleLogin} className="space-y-5">
                  <div className="px-10 form-control">
                    <label className="label">
                      <span className="text-lg font-semibold text-secondary">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your email"
                      name="email"
                      className="p-3 rounded-md outline outline-1 outline-secondary focus:outline-2"
                      required
                    />
                  </div>
                  <div className="px-10 form-control">
                    <label className="label">
                      <span className="text-lg font-semibold text-secondary">
                        Confirm Password
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Your password"
                        name="password"
                        className="w-full p-3 rounded-md outline outline-1 outline-secondary focus:outline-2"
                        required
                      />
                      <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-4 right-3"
                      >
                        {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                      </span>
                    </div>
                  </div>
                  <div className="px-10 mt-2">
                    <button
                      // style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
                      className="w-full rounded-md btn-fill"
                    >
                      Login
                    </button>
                  </div>
                </form>
                <div className="my-5">
                  <p className="text-center">Or Sign In with</p>
                  <div className="flex justify-center gap-5 items-center my-3 text-2xl  [&>*]:p-2 [&>*]:text-blue-600 [&>*]:bg-slate-100 [&>*]:rounded-full">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <img
                      src={googleIcon}
                      alt="google-icon..."
                      className="h-8"
                    />
                  </div>
                </div>

                <p className="my-3 text-center">
                  {`Don't have any account? `}
                  <Link
                    to={"/register"}
                    className="text-primary hover:underline"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </>
  );
};

export default Login;

{
  /* <form onSubmit={handleLogin} className="card-body">
{/* <div className=" form-control">
    <label className="label">
      <span className="text-lg font-semibold text-secondary">
        Email
      </span>
    </label>
    <input
      type="email"
      placeholder="Your email"
      name="email"
      className="p-3 rounded-sm outline outline-1 outline-secondary focus:outline-2"
      required
    />
  </div>
  <div className="form-control">
    <label className="label">
      <span className="text-lg font-semibold text-secondary">
        Confirm Password
      </span>
    </label>
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Your password"
        name="password"
        className="w-full p-3 rounded-sm outline outline-1 outline-secondary focus:outline-2"
        required
      />
      <span
        onClick={() => setShowPassword(!showPassword)}
        className="absolute top-4 right-3"
      >
        {showPassword ? (
          <AiFillEyeInvisible />
        ) : (
          <AiFillEye />
        )}
      </span>
    </div>
  </div> */
}
{
  /* {success && (
  <p className="text-sm text-gray-700">{success}</p>
)}
{error && <p className="text-sm text-red-700">{error}</p>} */
}

{
  /* <div className="mt-2">
  <button
    // style={{ textShadow: "2px 2px 0 rgba(0.5,0,0,0.5) " }}
    className="w-full rounded-md btn-fill"
  >
    Login
  </button>
</div>
<p className="my-3 text-center">
  {`Don't have any account? `}
  <Link
    to={"/register"}
    className="text-primary hover:underline"
  >
    Register
  </Link>
</p>
</form>  */
}
