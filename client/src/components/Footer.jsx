import logo from "../../images/Logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
      <div className="flex flex-[0.5] justify-center items-center">
        <img src={logo} alt="logo" className="w-32" />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-base text-center mx-2 cursor-pointer">Market</p>
        <p className="text-base text-center mx-2 cursor-pointer">Exchange</p>
        <p className="text-base text-center mx-2 cursor-pointer">Tutorials</p>
        <p className="text-base text-center mx-2 cursor-pointer">Wallets</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-sm text-center font-medium">Full-Stack & Blockchain Developer</p>
      <p className="text-sm text-center text-gray-400">Building scalable web & blockchain solutions</p>

      {/* Твои ссылки */}
      <div className="flex mt-3 space-x-4">
        <a href="https://www.linkedin.com/in/mansur-musaev/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          LinkedIn
        </a>
        <a href="https://github.com/Mansur-09595" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
          GitHub
        </a>
        <a href="mailto:mansurmusaev.work@gmail.com" className="text-red-500 hover:underline">
          Email
        </a>
      </div>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-left text-xs">mansurmusaev.work@gmail.com</p>
      <p className="text-right text-xs">All rights reserved 2025</p>
    </div>
  </div>
);

export default Footer;
