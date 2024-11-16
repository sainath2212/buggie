function Footer() {
  return (
    <div className="bg-black py-6 mt-8">
      <div className="p-6 md:flex md:justify-between text-white">
        {/* Left section */}
        <div className="left ml-8 mt-6">
          <div className="headerLogo text-3xl text-white font-bold tracking-wide cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
            Buggiee
          </div>
          <p className="text-white mt-2 text-lg">Stay Productive, Stay Ahead.</p>
        </div>

        {/* Right section (address and contact) */}
        <div className="right text-white md:w-1/4 ml-8 mt-6">
          <h2 className="text-2xl my-4">Buggiee Headquarters</h2>
          <p className="text-gray-400">123 Wanderlust Lane, Suite 456</p>
          <p className="text-gray-400">Travel City, Delhi, 110001, India</p>
          <p className="text-gray-400">Phone: +91 987-654-3210</p>
          <p className="text-gray-400">Email: <a href="mailto:support@buggiee.com" className="text-[#7091E6] hover:text-white transition-all">support@buggiee.com</a></p>
        </div>
      </div>

      {/* Footer navigation links */}
      <ul className="flex gap-8 text-[#EDE8F5] justify-end items-center pb-5 pr-16 text-lg">
        <li className="hover:text-[#7091E6] transition-all duration-300 transform hover:scale-105">About Us</li>
        <li className="hover:text-[#7091E6] transition-all duration-300 transform hover:scale-105">How Buggiee Works</li>
        <li className="hover:text-[#7091E6] transition-all duration-300 transform hover:scale-105">FAQ</li>
        <li className="hover:text-[#7091E6] transition-all duration-300 transform hover:scale-105">Privacy Policy</li>
      </ul>
    </div>
  );
}

export default Footer;
