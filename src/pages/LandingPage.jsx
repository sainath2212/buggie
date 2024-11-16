import { Button } from "../components/ui/button";
import "../App.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const LandingPage = () => {
  return (
    <>
      {/* Top Banner Section */}
      <div className="flex justify-center items-center h-fit mt-16 mb-20"> {/* Reduced mt-40 to mt-16 */}
        <div className="rounded-3xl w-fit h-10 p-8 bg-[#DCFCE6] gap-3 flex justify-center items-center">
          <div className="flex">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              className="h-8 rounded-full -ml-2"
              alt="user1"
            />
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              className="h-8 rounded-full -ml-2"
              alt="user2"
            />
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              className="h-8 rounded-full -ml-2"
              alt="user3"
            />
          </div>
          <h2 className="text-xl text-black ">30+ Happy users so far</h2>
        </div>
      </div>

      {/* Main Heading */}
      <div className="flex justify-center items-center mt-16 mb-20"> {/* Reduced mt-40 to mt-16 */}
        <h1 className="text-6xl text-center">Streamline Your Workflow Today.</h1>
      </div>

      {/* Description Section */}
      <div className="flex justify-center items-center flex-col mb-40"> {/* Keeping mb-40 for more bottom space */}
        <h2 className="text-lg text-center mt-5 w-2/3">
          Unlock your productivity potential. Plan better, manage smarter, and
          get things done faster. With a user-friendly interface and advanced
          task management tools, success is always within reach.
        </h2>
        
        <Link to="/signup">
          <Button className="mt-16 text-xl p-6">Get Started</Button> {/* Adjusted mt-16 for more space */}
        </Link>
      </div>
    </>
  );
};

export default LandingPage;
