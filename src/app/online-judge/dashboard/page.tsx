import { FaPython,FaJava,FaCuttlefish } from 'react-icons/fa';
import Link from 'next/link';
import Header from '@/app/components.tsx/Header';
import Footer from '@/app/components.tsx/Footer';
import DarkModeToggle from '@/app/darkModeToggle';
import AnimatedHeading from '@/app/components.tsx/AnimatedHeading';
const Dashboard = () => {
  return (
    <div className="min-h-screen ring ring-gray-300 m-0.5 rounded-2xl dark:border-gray-700 dark:shadow-gray-800 dark:bg-gray-900 bg-gray-300">
      <DarkModeToggle/>
      <Header />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      {/* Hero Section */}
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between">
          <div>
            {/* <h1 className="text-4xl font-bold mb-4">Welcome to <span className="text-blue-600">Online Judge</span></h1> */}
            <AnimatedHeading/>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              An online judge for compiling and running C++, Java, and Python code instantly.
            </p>
            <Link href="/online-judge/problems">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
                Try Now
              </button>
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <img
              src="/code-editor.png"
              alt="Code Editor"
              className="w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </header>

      {/* Supported Languages */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold mb-8 text-center">Supported Languages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <FaCuttlefish className="text-6xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">C++</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Compile and run C++ code with competitive-grade performance.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <FaJava className="text-6xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Java</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Run Java programs with support for standard input/output.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <FaPython className="text-6xl text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Python</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Execute Python code instantly and view output in real-time.</p>
          </div>
        </div>
      </section>
    </div>
      <Footer />
    </div>
  )
}

export default Dashboard;
