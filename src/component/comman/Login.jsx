import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { UserRound } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F5EBDD] relative overflow-hidden px-4 py-12">
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-60 h-60 bg-[#B8C1A3]/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#7B5A3A]/20 rounded-full blur-3xl"></div>
      </div>

      {/* Login Card */}
      <div
        data-aos="zoom-in"
        className="relative w-full max-w-md bg-[#7B5A3A]/90 border border-[#B8C1A3]/30 backdrop-blur-xl rounded-3xl shadow-2xl p-6 mt-15 md:p-10"
      >
        {/* Header Icon */}
        <div
          data-aos="fade-down"
          className="flex flex-col items-center mb-8 md:mb-10"
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#B8C1A3]/40 shadow-inner">
            <UserRound size={40} className="text-[#3A2E25]" />
          </div>
          <h2 className="text-3xl font-bold text-[#F5EBDD] mt-5 tracking-wide">
            Welcome Back
          </h2>
          <p className="text-[#F5EBDD]/70 text-sm mt-2">
            Sign in to continue your journey
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Email */}
          <div data-aos="fade-right" data-aos-delay="150">
            <label className="block text-[#F5EBDD]/90 mb-1 text-sm font-medium tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 bg-[#F5EBDD]/10 border border-[#F5EBDD]/25 text-[#F5EBDD] placeholder-[#F5EBDD]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8C1A3] focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Password */}
          <div data-aos="fade-left" data-aos-delay="250" className="relative">
            <label className="block text-[#F5EBDD]/90 mb-1 text-sm font-medium tracking-wide">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full p-3 pr-10 bg-[#F5EBDD]/10 border border-[#F5EBDD]/25 text-[#F5EBDD] placeholder-[#F5EBDD]/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B8C1A3] focus:border-transparent transition-all duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-9 text-[#F5EBDD]/60 hover:text-[#B8C1A3] transition-colors"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Forgot Password */}
          <div data-aos="fade-up" data-aos-delay="350" className="flex justify-end">
            <a
              href="#"
              className="text-sm text-[#B8C1A3] hover:text-[#F5EBDD] transition-all underline-offset-2 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            data-aos="zoom-in"
            data-aos-delay="450"
            className="w-full py-3 rounded-lg bg-[#B8C1A3] text-[#3A2E25] font-semibold text-lg shadow-md hover:bg-[#F5EBDD] hover:text-[#7B5A3A] transition-all duration-300 hover:shadow-lg transform hover:-translate-y-[2px]"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="550"
          className="flex items-center gap-2 mt-8"
        >
          <div className="flex-1 h-px bg-[#F5EBDD]/30"></div>
          <span className="text-[#F5EBDD]/60 text-sm">or</span>
          <div className="flex-1 h-px bg-[#F5EBDD]/30"></div>
        </div>

        {/* Signup Link */}
        <p
          data-aos="fade-up"
          data-aos-delay="650"
          className="text-[#F5EBDD]/80 text-center text-sm mt-6"
        >
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#B8C1A3] font-semibold hover:text-[#F5EBDD] underline-offset-4 hover:underline transition-all"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
