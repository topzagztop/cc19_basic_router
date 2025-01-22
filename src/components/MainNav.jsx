import { Link } from "react-router";

function MainNav() {
  return (
    <div>
      <nav className="flex justify-between h-8 bg-green-200">
        <div className="flex gap-4 items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/recap">Recap</Link>
          <Link to="/recap-usestate">RecapUseState</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
