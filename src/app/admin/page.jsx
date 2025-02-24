"use client";

import { FaKey, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa"; // Using react-icons
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function Home() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();




  

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleCredentialsLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Email:", email);
      console.log("Password:", password);

      // Use NextAuth to sign in
      const loginRes = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false, // Don't auto redirect
      });

      if (loginRes?.error) {
        // Show error alert if login failed
        toast.error("Error in login: Wrong Email or Password");
      } else {
        // Success, show success alert and redirect
        toast.success("Login successful!");
        router.push("/67a5a3a2e2"); // Navigate to dashboard
      }
    } catch (error) {
      console.log(error);
      alert("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  const Spinner = () => (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600"></div>
    </div>
  );

  const Button = ({ children, className, onClick, ariaLabel }) => (
    <button
      aria-label={ariaLabel}
      className={className}
      onClick={onClick}
      disabled={loading}
    >
      {children}
    </button>
  );

  return (
    <div className="p-5 h-screen gap-12 w-full bg-gradient-to-r from-gray-50 via-white to-gray-50 flex flex-col items-center justify-center">
      <div className="w-full sm:w-96 bg-white rounded-3xl px-8 max-md:px-4 py-10 shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
          Website Logo Here!
        </h2>

        {/* Email Input */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute max-md:w-5 h-5 left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="max-md:text-sm w-full max-md:pl-10 pl-12 p-3 bg-gray-50 text-gray-800 rounded-lg focus:outline-none transition duration-200"
          />
        </div>

        {/* Password Input */}
        <div className="relative mb-6">
          <FaKey className="max-md:w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type={passwordVisible ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="max-md:text-sm w-full max-md:pl-10 pl-12 p-3 bg-gray-50 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="max-md:w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {passwordVisible ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <Button
          ariaLabel="Login"
          className="w-full max-md:p-5 px-6 py-3 font-semibold max-md:text-sm max-md:font-normal text-medium bg-green-600 hover:bg-green-700 active:bg-green-600 text-white px-6 rounded-lg transition duration-300 ease-in-out"
          onClick={handleCredentialsLogin}
        >
          {loading ? <Spinner /> : "Login As Admin"}
        </Button>


      </div>

      <p className="max-md:px-3 max-md:text-sm text-center text-gray-600">
        Are You Facing any Issue or Want some Changes in your site?{" "}
        <a className="text-blue-600 underline" href="#">
          Contact
        </a>{" "}
        your Developers
      </p>
    </div>
  );
}