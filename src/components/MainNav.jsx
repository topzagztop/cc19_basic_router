import { Link } from "react-router";
import { ShoppingCart } from 'lucide-react';


function MainNav() {
  return (
    <div>
      <nav className="flex justify-between h-8 bg-green-200">
        <div className="flex gap-4 items-center">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
        </div>

        <div className="flex gap-4 items-center">
          <Link to="/mycart"><ShoppingCart /></Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>
    </div>
  );
}

export default MainNav;
