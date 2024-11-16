import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black p-4 md:p-6 ">
      <div className="flex justify-between items-center container mx-auto gap-16">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <div className="logo text-xl sm:text-2xl font-semibold text-white tracking-wide cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
            Buggiee
          </div>
        </Link>

        {/* Links Section */}
        <div className="links flex gap-4">
          <Link to="/signin">
            <Button className="px-4 py-2 text-sm sm:text-base bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 rounded-md transition-all duration-300">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
