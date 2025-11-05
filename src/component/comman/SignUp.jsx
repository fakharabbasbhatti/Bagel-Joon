import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { UserPlus } from "lucide-react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5EBDD] to-[#B8C1A3]/40 px-4 md:px-6 py-10 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-[-80px] left-[-100px] w-[400px] h-[400px] bg-[#B8C1A3]/30 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-[-60px] right-[-80px] w-[350px] h-[350px] bg-[#7B5A3A]/25 blur-[160px] rounded-full"></div>

      {/* Signup Card */}
      <div
        data-aos="zoom-in"
        className="relative w-full max-w-lg bg-[#7B5A3A]/95 border border-[#B8C1A3]/30 backdrop-blur-md rounded-3xl shadow-[0_4px_40px_rgba(58,46,37,0.3)] p-6 mt-14 md:p-12"
      >
        {/* Header */}
        <div
          data-aos="fade-down"
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#B8C1A3]/40 shadow-inner">
            <UserPlus size={40} className="text-[#3A2E25]" />
          </div>
          <h2 className="text-3xl font-extrabold text-[#F5EBDD] mt-4 tracking-wide">
            Create Account
          </h2>
          <p className="text-[#F5EBDD]/75 text-sm mt-2 text-center max-w-sm">
            Join the Bageljoon family and start your journey with us!
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6">
          {/* Full Name */}
          <div data-aos="fade-right" data-aos-delay="100">
            <label className="block text-[#F5EBDD]/90 mb-1 text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full p-3 bg-[#F5EBDD]/10 border border-[#F5EBDD]/25 text-[#F5EBDD] placeholder-[#F5EBDD]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B8C1A3] focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Email */}
          <div data-aos="fade-right" data-aos-delay="200">
            <label className="block text-[#F5EBDD]/90 mb-1 text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full p-3 bg-[#F5EBDD]/10 border border-[#F5EBDD]/25 text-[#F5EBDD] placeholder-[#F5EBDD]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B8C1A3] focus:border-transparent transition-all duration-300"
              required
            />
          </div>

          {/* Password */}
          <div data-aos="fade-left" data-aos-delay="300" className="relative">
            <label className="block text-[#F5EBDD]/90 mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="w-full p-3 pr-10 bg-[#F5EBDD]/10 border border-[#F5EBDD]/25 text-[#F5EBDD] placeholder-[#F5EBDD]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B8C1A3] focus:border-transparent transition-all duration-300"
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

          {/* Confirm Password */}
          <div data-aos="fade-left" data-aos-delay="400" className="relative">
            <label className="block text-[#F5EBDD]/90 mb-1 text-sm font-medium">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Re-enter password"
              className="w-full p-3 pr-10 bg-[#F5EBDD]/10 border border-[#F5EBDD]/25 text-[#F5EBDD] placeholder-[#F5EBDD]/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B8C1A3] focus:border-transparent transition-all duration-300"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-9 text-[#F5EBDD]/60 hover:text-[#B8C1A3] transition-colors"
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            data-aos="zoom-in"
            data-aos-delay="500"
            className="w-full py-3 rounded-xl bg-[#B8C1A3] text-[#3A2E25] font-semibold text-lg hover:bg-[#F5EBDD] hover:text-[#7B5A3A] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-[2px] active:scale-[0.98]"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex items-center gap-2 mt-8"
        >
          <div className="flex-1 h-px bg-[#F5EBDD]/30"></div>
          <span className="text-[#F5EBDD]/60 text-sm">or</span>
          <div className="flex-1 h-px bg-[#F5EBDD]/30"></div>
        </div>

        {/* Login Redirect */}
        <p
          data-aos="fade-up"
          data-aos-delay="700"
          className="text-[#F5EBDD]/80 text-center text-sm mt-6"
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#B8C1A3] font-semibold hover:text-[#F5EBDD] underline-offset-4 hover:underline transition-all"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Signup;
