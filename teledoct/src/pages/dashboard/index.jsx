import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Dashboard = () => {
  useEffect(() => {
    Aos.init({ duration: 200 });
  }, []);

  const data = [
    {
      id: 1,

      name: "Agent",
      to: "/signin",
    },
    {
      id: 2,

      name: "Patient",
      to: "/signin",
    },
    {
      id: 3,
      name: "Doctor",
      to: "/signdoc",
    },
  ];
  return (
    <main className="w-full md:p-10 p-4 h-screen flex items-center justify-center">
      <div className="md:w-1/2  w-full shadow-xl rounded- p-4 overflow-hidden">
        <h1 className="my-4 text-2xl uppercase text-center font-semibold font-siz ">
          Welcome to Remote Doctor
        </h1>
        <p className="my-2 text-green-600 text-xl underline underline-offset-2 uppercase text-left font-semibold ">
          Login as:
        </p>
        <ul className="flex flex-col gap-4 w-full">
          {data.map(({ name, to, id }, i) => (
            <Link
              data-aos="fade-left"
              data-aos-duration={`${
                id === 1 ? "1000" : id === 2 ? "2000" : "3000"
              }`}
              to={to}
              key={name}
              className="p-4 text-center bg-green-500 rounded-md text-white  border-2 border-green-500 transition-[background] duration-300 overflow-hidden relative after:contents-[''] after:absolute after:w-full after:h-2 after:bg-green-600  shadows shadow-orange-300  after:-left-0 after:-bottom-0 after:-right-0 
              font-semibold font-md
              "
            >
              <span className="relative z-1"> {name}</span>
            </Link>
          ))}
        </ul>

        <Link
          data-aos="flip-left"
          data-aos-duration="3000"
          to="/signup"
          className="inline-block my-5 bg-transparent py-3 px-6 rounded-md border-2 border-green-500 hover:bg-green-50"
        >
          <span className="flex items-center gap-3">
            Signup
            <FaArrowRight size={16} className="text-green-500" />
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Dashboard;
