import { Button } from "../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@gmail.com" && password === "admin1234") {
      toast.success("Sign in successful!");
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-6">
      <Card className="w-full max-w-[400px] bg-white text-black shadow-lg rounded-lg p-8 border border-gray-300">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-black">Welcome to Buggiee</CardTitle>
          <CardDescription className="text-lg mt-2 text-gray-700">
            Sign in to manage your projects
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full gap-6">
              {/* Email Field */}
              <div className="flex flex-col space-y-3">
                <Label htmlFor="email" className="text-sm text-gray-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="text-black border border-gray-300 focus:border-black focus:ring-2 focus:ring-black rounded-lg px-4 py-2 transition-all duration-200"
                  onChange={(e) => { setEmail(e.target.value); }}
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col space-y-3">
                <Label htmlFor="password" className="text-sm text-gray-700">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="text-black border border-gray-300 focus:border-black focus:ring-2 focus:ring-black rounded-lg px-4 py-2 transition-all duration-200"
                  onChange={(e) => { setPassword(e.target.value); }}
                />
              </div>
            </div>
          </form>
        </CardContent>

        <CardFooter className="flex flex-col items-center space-y-4 mt-6">
          {/* Sign In Button */}
          <Button className="w-full py-3 text-lg bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black rounded-md transition-all duration-300" onClick={handleSubmit}>
            Sign In
          </Button>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
        <h2 className="text-lg text-black underline">Dummy Details:</h2>
        <h2 className="text-sm text-gray-600">Email: admin@gmail.com</h2>
        <h2 className="text-sm text-gray-600">Password: admin1234</h2>
      </Card>
      <ToastContainer />
    </div>
  );
}
