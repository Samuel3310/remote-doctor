import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Agent from "./pages/agent";
import Doctor from "./pages/doctor";
import Patient from "./pages/patient";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import NotFound from "./pages/non-found";
import Onboard from "./pages/onboard";
import Media from "./pages/capture";
import { UserProvider } from "./components/store/Usercontext";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/agent" element={<Agent />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/patient" element={<Patient />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/onboard" element={<Onboard />} />
            <Route path="/media" element={<Media />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
