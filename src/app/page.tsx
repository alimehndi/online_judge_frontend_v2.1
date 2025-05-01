// import Image from "next/image";
// import LoginPage from "./online-judge/login/page";

// export default function Home() {
//   return (
//     <>
//   Welcome to HOme
//   <LoginPage/>
//     </>
   
//   );
// }
import Link from 'next/link'; // Import Link component

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
          Welcome to Online Judge!!
        </h1>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/2048px-Wikipedia-logo-v2.svg.png"
          alt="Online Judge Logo"
          className="w-40 h-40 object-contain mb-4"
        />
        <Link href="/online-judge/login">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Go to Sign In
          </button>
        </Link>
      </div>
    </div>
  );
}

