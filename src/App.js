import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";

import SearchBar from "./components/SearchBar";

import ProfileCustomer from "./components/ProfileCustomer";
import SettingsPage from "./components/SettingsPage";
import ContactPage from "./components/ContactPage";
import AboutUsPage from "./components/AboutUsPage";
import HomePage from "./components/HomePage";
import AreaAdmin from "./components/AreaAdmin";
import Airports from "./components/Airports";
import Flights from "./components/Fligths";
import AreaCustomer from "./components/AreaCustomer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="registration" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="SearchBar" element={<SearchBar />} />
          <Route path="Profile" element={<ProfileCustomer />} />
          <Route path="Settings" element={<SettingsPage />} />
          <Route path="Contact" element={<ContactPage />} />
          <Route path="AboutUs" element={<AboutUsPage />} />
          <Route path="Home" element={<HomePage />} />
          <Route path="AreaAdmin" element={<AreaAdmin />}>
            <Route path="airports" element={<Airports />} />
            <Route path="flights" element={<Flights />} />
          </Route>
          <Route path="AreaCustomer" element={<AreaCustomer />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
