import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/Layout";
import Register from "./components/Register";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import ProfileCustomer from "./components/ProfileCustomer";
import SettingsPage from "./components/SettingsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="registration" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="MyNavBar" element={<NavBar />} />
          <Route path="SearchBar" element={<SearchBar />} />
          <Route path="Footer" element={<Footer />} />
          <Route path="ProfileCustomer" element={<ProfileCustomer />} />
          <Route path="Settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
