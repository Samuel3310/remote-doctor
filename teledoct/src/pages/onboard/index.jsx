import { FaUserPlus, FaStethoscope, FaWallet, FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import { MdPerson2 } from "react-icons/md";
import { AiFillAudio } from "react-icons/ai";
import { FaCameraRetro } from "react-icons/fa";
import { CiImageOn } from "react-icons/ci";
import { FaRegTimesCircle } from "react-icons/fa";
import Media from "../capture";
import { Link } from "react-router-dom";

const Onboard = () => {
  const data = [
    {
      title: "Onboard Patient",
      to: "/onboarding",
      text: "Start the process of registering a new patient. Gather necessary personal and medical information to ensure a smooth onboarding experience.",
      icon: <FaUserPlus size={24} className="text-white" />,
    },
    {
      title: "Request Care",
      to: "/request-care",
      text: "Submit a request htmlFor medical care. Choose from a variety of services and schedule appointments at your convenience.",
      icon: <FaStethoscope size={24} className="text-white" />,
    },
    {
      title: "Fund Wallet",
      to: "/fund",
      text: "Add funds to your wallet to easily pay htmlFor medical services. Keep track of your balance and transaction history.",
      icon: <FaWallet size={24} className="text-white" />,
    },
    {
      title: "Fund Patient",
      to: "/fund-patient",
      text: "Contribute funds to support a patient's medical expenses. Help others receive the care they need by donating directly to their healthcare costs.",
      icon: <FaHeart size={24} className="text-white" />,
    },
  ];

  const [showUserData, setShowUserData] = useState(false);
  const [userData, setUserData] = useState([]);
  const [signin, setSignin] = useState(false);
  const [rData, setRData] = useState({});
  const [requestCare, setRequestCare] = useState(true);

  useEffect(() => {
    if (Object.keys(rData).length > 0) {
      setUserData((prev) => [...prev, rData]);
    }
  }, [rData]);

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObj = Object.fromEntries(formData.entries());
    setRData(formObj);
    e.target.reset();
  };

  const addPatient = () => {
    setSignin(false);
    console.log(userData); // This will now include the newly added rData
  };

  return (
    <div className="h-screen w-full bg-gray-50">
      <div
        className={`${
          signin
            ? "left-0 transition-[left] duration-500"
            : "left-[2000px] transition-[left] duration-500"
        }   w-full min-h-full bg-white/[0.6] p-3 z-10 fixed rounded-md shadow-xl flex justify-center items-center`}
      >
        <div className=" relative bg-white shadow-2xl rounded-lg p-5 flex flex-col items-center justify-center gap-4">
          <FaRegTimesCircle
            size={24}
            className="absolute top-2 cursor-pointer right-2 text-red-500"
            onClick={() => setSignin(!signin)}
          />

          <form className="w-full max-w-lg" onSubmit={formSubmit}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border b rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="name"
                  name="username"
                  type="text"
                  placeholder="Name"
                  // onChange={formSubmit}
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="Email"
                >
                  Email
                </label>
                <input
                  // onChange={formSubmit}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Bukola"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  D-O-B
                </label>
                <input
                  // onChange={formSubmit}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="date"
                  type="date"
                  name="date"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-city"
                >
                  Phone Number
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="number"
                  type="number"
                  placeholder="08068483822"
                  // onChange={formSubmit}
                  name="number"
                />
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-state"
                >
                  Gender
                </label>
                <div className="relative">
                  <select
                    // onChange={formSubmit}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="gender"
                    name="gender"
                  >
                    <option selected hidden>
                      Gender
                    </option>
                    <option defaultValue="male">Male</option>
                    <option defaultValue="female">Female</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg
                      className="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-zip"
                >
                  Address
                </label>
                <input
                  // onChange={formSubmit}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="address"
                  type="text"
                  placeholder="L/B Iluppeju"
                  name="address"
                />
              </div>
              <div className="w-full  px-3 mb-6 md:mb-0">
                <button
                  type="submit"
                  className="w-full rounded-md bg-green-600 hover:bg-green-500 uppercase py-3 font-semibold text-white px-3 mb-6 md:mb-0 block mt-3"
                  onClick={addPatient}
                >
                  Onboard
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full flex justify-center flex-col gap-4">
        <div className="flex justify-between md:px-10 px-4 py-5">
          <h1 className="text-md font-bold text-center items-center">
            Welcome to to Tele-Med-Care
          </h1>
          <div>
            <p>Ekt/16/0011</p>
            <p>Mr. {"Name"}</p>
          </div>
          <div className="relative ">
            <MdPerson2
              size={30}
              className="cursor-pointer"
              onClick={() => setShowUserData(!showUserData)}
            />

            <div
              className={`${
                showUserData ? "block" : " hidden "
              } p-4 bg-white absolute right-0 min-w-[300px] shadow-lg`}
            >
              <p className="text-sm border-b-[1px] pb-1 mb-2 text-right flex justify-between items-center">
                <span>
                  <MdPerson2 size={24} />
                </span>
                <span>
                  Your Status:
                  <span className="text-blue-600 font-semibold">Agent</span>
                </span>
              </p>

              {userData.length > 0 && (
                <div className="flex flex-col gap-2">
                  {userData?.map((user, i) => (
                    <div
                      key={i}
                      className="border-b-2 last:border-none border-gray-200 p-2"
                    >
                      <p className="text-sm"> Patient {i + 1}</p>
                      <div>
                        <p className="text-[10px]">Name: {user?.username}</p>
                        <p className="text-[10px]">Email: {user?.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {userData.length === 0 && <p>You Have no Onboarded Patient</p>}
            </div>
          </div>
        </div>

        <div className="w-full h-full mt-10 py-20 bg-white min-h-20 p-4 shadow-md flex justify-center">
          <div className="md:w-2/3 lg:w-1/2 w-full">
            {!requestCare && (
              <h1 className="text-center text-4xl font-bold text-green-600 ">
                I want to
              </h1>
            )}
            {requestCare ? (
              <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 min-w-[300px] gap-2">
                  <h1 className="col-span-2 text-center my-2 font-bold">
                    Send A request via
                  </h1>
                  <button className="border border-green-600 h-[200px]  rounded-md  hover:bg-green-600 hover:text-white cursor-not-allowed transition-all duration-300 relative overflow-hidden">
                    <div className="absolute rotate-[45deg] -right-16 top-7 text-nowrap text-white bg-red-600 w-[200px]">
                      Coming Soon
                    </div>
                    Image Upload
                  </button>
                  <button className="border border-green-600 h-[200px] rounded-md  cursor-not-allowed hover:bg-green-600 hover:text-white transition-all duration-300 relative overflow-hidden">
                    <div className="absolute rotate-[45deg] -right-16 top-7 text-nowrap text-white bg-red-600 w-[200px]">
                      Coming Soon
                    </div>
                    Voice Record
                  </button>
                  <Link
                    to="/media"
                    className="border flex justify-center items-center border-green-600 h-[200px] rounded-md  col-span-2 hover:bg-green-600 hover:text-white transition-all duration-300"
                  >
                    Live Chat
                  </Link>
                </div>
              </div>
            ) : (
              <div className="w-full">
                <div className="flex w-full flex-col  ">
                  <div className="w-full  text-center">
                    <h1 className="my-2 font-semibold">
                      Request for a Doctor Service
                    </h1>
                    <p className="text-sm">
                      Patient ID: <span className="">Ek/533/3737</span>
                    </p>
                    <p className="text-sm">
                      Log your complains below using either file attachment,
                      Video recording or file upload
                    </p>
                  </div>
                  <div className="w-full mx-auto md:w-full p-3 ">
                    <div className="hereisthescreen w-full  h-[400px] bg-gray-300 rounded-xl relative z-1">
                      <div className="absolute flex flex-col gap-3 left-2 top-[50%] translate-y-[-50%]">
                        {" "}
                        <button className="">
                          <AiFillAudio
                            size={24}
                            className="text-gray-800 hover:text-green-600"
                          />
                        </button>
                        <button className="">
                          <FaCameraRetro
                            size={24}
                            className="text-gray-800 hover:text-green-600"
                          />
                        </button>
                        <button className="">
                          <CiImageOn
                            size={24}
                            className="text-gray-800 hover:text-green-600"
                          />
                        </button>
                      </div>
                      <div className="p-2 bg-red-600 w-40 rounded-xl text-white text-center absolute bottom-0 right-0 cursor-pointer">
                        Send Request
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
