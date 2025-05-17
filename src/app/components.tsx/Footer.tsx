import { FaGithub,FaYoutube,FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    // <div className="block w-full max-w-screen-lg px-4 py-2 mx-auto bg-white shadow-md rounded-md lg:px-8 lg:py-3 mt-10">
    <footer className="bg-gray-100 text-gray-600 dark:bg-gray-900 dark:text-gray-400 px-4 py-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">
          &copy; 2026 Online Judge, Inc. All rights reserved.
        </p>
        <div className="flex items-center space-x-5 text-lg">
        <a href="http://youtube.com/">
        <FaYoutube />
        </a>
        <a href="http://linkedin.com/">
            <FaLinkedin />
        </a>
        <a href="http://github.com/">
            <FaGithub/>
        </a>
        </div>
      </div>
    </footer>
//  </div>
  );
}

export default Footer;
