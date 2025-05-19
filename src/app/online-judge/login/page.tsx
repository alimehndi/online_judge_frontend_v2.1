"use client"
import Image from "next/image";
import DarkModeToggle from "../../darkModeToggle";
import { useState, useEffect ,useRef } from "react";
import axios from "axios";
import {z} from 'zod';
import Script from "next/script";

export default function LoginPage() {
  const schema = z.object({
    username: z.string().email({ message: "Email is required" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  });
  const widgetRef = useRef(null);
  const [formData,setFormData]  = useState({username : "", password : ""});
    useEffect(() => {
    if (typeof window !== "undefined" && window.turnstile) {
      window.turnstile.render(widgetRef.current, {
        sitekey: "yourSitekey",
        callback: function (token) {
          console.log("Turnstile token:", token);
        },
      });
    }
  }, []);
  const authenticateUser = async (e : React.FormEvent) => {
    e.preventDefault();
    try{
      schema.parse(formData);
       const res = await axios.post('www.google.com',formData);
       if(res)
       {
        console.log('Sign IN successfully');
       }
      }
      catch(err)
      {
        throw new Error('Not sign');
      }

    }
  return (
  
    <>
       
     <DarkModeToggle/>
      {/* Full screen center box */}
      <div className="flex justify-center items-center h-screen bg-gray-100  dark:bg-gray-900 transition-colors duration-300">
        {/* Inner container with logo and sign-in form */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8 w-full max-w-4xl">
          {/* Left side: Logo and Welcome text */}
          <div className="flex-1 flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Welcome to Online Judge!!
            </h1>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/2048px-Wikipedia-logo-v2.svg.png"
              alt="Online Judge Logo"
              className="w-40 h-40 object-contain"
            />
          </div>

          {/* Right side: Sign-in form */}
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Sign In</h2>
            <form className="flex flex-col gap-4" onSubmit={authenticateUser}>
              <input
                type="email"
                placeholder="Email"
                onChange={(e)=> {setFormData({...formData ,username : e.target.value})}}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e)=> {setFormData({...formData ,password : e.target.value})}}
                className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div
  class="cf-turnstile"
  data-sitekey="0x4AAAAAABdx8ehdxMZzSryi"
  data-callback="javascriptCallback"
></div>
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"

              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
