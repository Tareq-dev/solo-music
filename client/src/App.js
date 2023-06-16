import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Dashboard from "./Pages/Dashboard";
import AddMusic from "./Pages/AddMusic";
import Admin from "./Pages/Admin";
import RequireAuth from "./components/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllMusic from "./components/AllMusic";

function App() {
  return (
    <div className="container mx-auto max-w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/all-music" element={<AllMusic />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<Admin />}></Route>
          <Route path="add-music" element={<AddMusic />}></Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
