import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      toast.success("Signup successful");
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-6">
      <Card className="w-full max-w-[400px] bg-white text-black shadow-lg rounded-lg p-8 border border-gray-300">
        <CardHeader>
          <CardTitle className="text-3xl font-semibold text-black">Join Buggiee</CardTitle>
          <CardDescription className="text-lg mt-2 text-gray-700">Create an account to get started</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full gap-6">
              <div className="flex flex-col space-y-3">
                <Label htmlFor="email" className="text-sm text-gray-700">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-black border border-gray-300 focus:border-black focus:ring-2 focus:ring-black rounded-lg px-4 py-2 transition-all duration-200"
                  required
                />
              </div>

              <div className="flex flex-col space-y-3">
                <Label htmlFor="password" className="text-sm text-gray-700">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-black border border-gray-300 focus:border-black focus:ring-2 focus:ring-black rounded-lg px-4 py-2 transition-all duration-200"
                  required
                />
              </div>

              <div className="flex flex-col space-y-3">
                <Label htmlFor="confirm-password" className="text-sm text-gray-700">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="text-black border border-gray-300 focus:border-black focus:ring-2 focus:ring-black rounded-lg px-4 py-2 transition-all duration-200"
                  required
                />
              </div>
            </div>
            <CardFooter className="flex flex-col items-center space-y-4 mt-6">
              <Button type="submit" className="w-full py-3 text-lg bg-black text-white hover:bg-gray-800 focus:ring-2 focus:ring-black rounded-md transition-all duration-300">
                Sign Up
              </Button>

              <p className="text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/signin" className="text-blue-600 hover:underline">
                  Log in
                </Link>
              </p>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
      <ToastContainer />
    </div>
  );
}

export default Signup;
