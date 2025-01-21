import { Routes, Route } from "react-router";
import Layout from "../layouts/Layout";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

function AppRoutes() {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Route>

            <Route path="admin" element={<Layout />}>
                <Route index element={<h1>Dashboard page</h1>} />
                <Route path="manage" element={<h1>Manage page</h1>} />
                <Route path="setting" element={<h1>Setting page</h1>} />
            </Route>
        </Routes>
    </div>
  );
}

export default AppRoutes;
