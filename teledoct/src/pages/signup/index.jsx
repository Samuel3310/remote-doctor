import { useEffect, useState } from "react";
import FormInput from "../../components/form-input";
import { Link } from "react-router-dom";
import { CiSettings } from "react-icons/ci";

const Signup = () => {
  const [active, setActive] = useState(1);
  const [signin, setSignin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    lga: "",
    town: "",
    phone: "",
    email: "",
    password: "",
  });

  const data = [
    {
      id: 1,
      name: "Agent",
    },
    {
      id: 2,
      name: "Patient",
    },
    {
      id: 3,
      name: "Doctor",
    },
  ];

  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const [textAction, setTextAction] = useState("Sign Up");

  const handleSigninClick = () => {
    setTimeout(() => {
      setSignin(!signin);
    }, 5000);
    setTextAction(
      <span className="w-full flex justify-center items-center gap-2">
        Please Wait <CiSettings size={24} className="animate-spin" />
      </span>
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section className="w-full h-screen bg-gray-50 items-center relative justify-center">
      <div
        className={`${
          signin
            ? "left-0 transition-[left] duration-500"
            : "left-[2000px] transition-[left] duration-500"
        } w-full h-full bg-white/[0.6] p-3 fixed rounded-md shadow-xl flex justify-center items-center`}
      >
        <div className="w-[350px] h-[200px] bg-white shadow-2xl rounded-lg p-5 flex flex-col items-center justify-center gap-4">
          <h1>Well Done!</h1>
          <p className="uppercase text-center">
            You have successfully Registered as{" "}
            <span className="text-green-600 font-semibold">
              {data[active - 1].name}
            </span>
          </p>
          <Link
            to="/signin"
            className="p-3 border border-green-600 rounded-md flex items-center gap-2"
          >
            Proceed to SignIn{" "}
            <span>
              <CiSettings size={24} className="animate-spin" />
            </span>
          </Link>
        </div>
      </div>

      <div className="bg-white p-4 w-full sm:w-1/2 md:w-2/5 mx-auto flex flex-col gap-4">
        <h1 className="text-4xl text-center font-bold text-gray-800">
          Signup As
        </h1>

        <div className="flex w-full bg-green-500 justify-between pt-2 px-1 my-4 rounded-t-md gap-1">
          {data.map(({ id, name }) => (
            <button
              key={id}
              className={`flex justify-center w-full font-semibold h-full border-x-[1px] border-t-[1px] border-white py-3 rounded-t-md shadow-md text-white outline-none ${
                active === id ? "bg-white !text-green-600" : "text-white"
              }`}
              onClick={() => setActive(id)}
            >
              {name}
            </button>
          ))}
        </div>

        <form className="flex justify-center" onSubmit={handleChange}>
          <div className="w-full max-w-full">
            <h1 className="text-center font-bold">{data[active - 1].name}</h1>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " o>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <FormInput
                    type="text"
                    label="name"
                    name="name"
                    handleChange={handleChange}
                  />
                  <FormInput
                    type="text"
                    label="gender"
                    name="gender"
                    handleChange={handleChange}
                  />
                  <FormInput
                    type="text"
                    label="lga"
                    name="lga"
                    handleChange={handleChange}
                  />
                  <FormInput
                    type="text"
                    label="town"
                    name="town"
                    handleChange={handleChange}
                  />
                  <FormInput
                    type="number"
                    label="phone"
                    name="phone"
                    handleChange={handleChange}
                  />
                  <FormInput
                    type="text"
                    label="email"
                    name="email"
                    handleChange={handleChange}
                  />
                  <FormInput
                    type="password"
                    label="password"
                    name="password"
                    handleChange={handleChange}
                  />{" "}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleSigninClick}
                >
                  {textAction}
                </button>
              </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
              &copy;{new Date().getFullYear()} remote Doctor All rights
              reserved.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Signup;
