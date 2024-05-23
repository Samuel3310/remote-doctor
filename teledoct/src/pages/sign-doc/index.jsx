import { useState } from "react";
import FormInput from "../../components/form-input";
import { useNavigate } from "react-router-dom";
import { CiSettings } from "react-icons/ci";

const SignDoc = () => {
  const [signin, setSignin] = useState(false);
  const [textAction, setTextAction] = useState("Login");

  const navigate = useNavigate();
  const handleSigninClick = () => {
    setTimeout(() => {
      setSignin(!signin);
      goNow();
    }, 5000);

    setTextAction(
      <span className="w-full flex justify-center items-center  gap-2">
        Please Wait <CiSettings size={24} className="animate-spin" />
      </span>
    );
  };

  function goNow() {
    setTimeout(() => {
      window.location.href =
        "https://shegzee.pythonanywhere.com/consult/doctor/";
    }, 4000);
  }

  return (
    <section className="w-full h-screen bg-gray-50 items-center relative justify-center ">
      <div
        className={`${
          signin
            ? "left-0 transition-[left] duration-500"
            : "left-[2000px] transition-[left] duration-500"
        }   w-full h-full bg-white/[0.6] p-3 fixed rounded-md shadow-xl flex justify-center items-center`}
      >
        <div className="w-[350px] h-[200px] bg-white shadow-2xl rounded-lg p-5 flex flex-col items-center justify-center gap-4">
          <h1>Well Done!</h1>
          <p className="uppercase text-center">
            You have successfully Logged in as
            <span className="text-green-600 font-semibold "> Doctor</span>
          </p>
          <p className="p-3 border border-green-600 rounded-md flex items-center  gap-2">
            Redirecting
            <span>
              {" "}
              <CiSettings size={24} className="animate-spin" />
            </span>
          </p>
        </div>
      </div>

      <div className="bg-white p-4 w-full sm:w-1/2 md:w-2/5 mx-auto flex flex-col gap-4">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Welcome Back
        </h1>

        <form className="flex justify-center">
          <div className="w-full max-w-full">
            <h1 className="text-center font-bold">Doctor</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="grid grid-cols-1 gap-4">
                <FormInput type="text" label="Email" />
                <FormInput type="password" label="Password" />
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="w-1/2 mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline "
                  type="button"
                  onClick={handleSigninClick}
                >
                  {textAction}
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </a>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;{new Date().getFullYear()} remote Doctor. All rights
              reserved.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignDoc;
