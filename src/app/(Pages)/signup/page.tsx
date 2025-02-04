"use client"; // This tells Next.js it's a Client Component

import Image from "next/image";
import { useState } from "react";

export default function Sign_up() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = () => {
    console.log({ email, password, firstName, lastName, birthday, country, gender, termsAccepted });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src="/logo.png" alt="Logo" width={50} height={50} />
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold text-center mb-4">BECOME A FURNIRO MEMBER</h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Create your Furniro Member profile and get first access to the very best of Furniro products, inspiration, and community.
        </p>

        {/* Form */}
        <div className="space-y-4">
          <input type="email" className="border border-gray-300 p-3 w-full rounded-md" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="border border-gray-300 p-3 w-full rounded-md" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="text" className="border border-gray-300 p-3 w-full rounded-md" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <input type="text" className="border border-gray-300 p-3 w-full rounded-md" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <input type="date" className="border border-gray-300 p-3 w-full rounded-md" value={birthday} onChange={(e) => setBirthday(e.target.value)} placeholder="Birthday" title="Birthday" />
          <select className="border border-gray-300 p-3 w-full rounded-md" value={country} onChange={(e) => setCountry(e.target.value)} aria-label="Select your country">
            <option value="">Select a Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="Australia">Australia</option>
          </select>
          
          {/* Gender Selection */}
          <div>
            <span className="text-sm text-gray-600">Select Gender:</span>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="Male" checked={gender === "Male"} onChange={() => setGender("Male")} />
                <span className="text-sm">Male</span>
              </label>
              <label className="flex items-center space-x-2">
                <input type="radio" name="gender" value="Female" checked={gender === "Female"} onChange={() => setGender("Female")} />
                <span className="text-sm">Female</span>
              </label>
            </div>
          </div>
          
          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2">
            <input type="checkbox" checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
            <span className="text-sm text-gray-600">I agree to the <a href="#" className="text-blue-500">Terms and Policy</a></span>
          </div>

          {/* Submit Button */}
          <button onClick={handleSubmit} className="w-full bg-[#C7973F] text-white py-3 rounded-md hover:bg-[#b18235]">Join Us</button>

          {/* Already Signed-In Link */}
          <div className="text-center mt-4">
            <span className="text-sm text-gray-600">Already have an account? </span>
            <a href="/login" className="text-blue-500 font-medium">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
