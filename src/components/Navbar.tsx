import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="container flex justify-between items-center">
      <div className=" py-5 text-color-secondary font-bold text-3xl">
        <a href="#atom" className="pl-2">
          <span className="text-color-white mr-2">Abubakar</span>
          site
        </a>
      </div>
      <div>
        <ul className="hidden lg:flex items-center space-x-6">
          <li>
            <a
              href="#home"
              className="hover:text-color-secondary ease-in duration-200"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-color-secondary ease-in duration-200"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="hover:text-color-secondary ease-in duration-200"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-color-secondary ease-in duration-200"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className="hover:text-color-secondary ease-in duration-200"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-color-secondary ease-in duration-200"
            >
              Contact
            </a>
          </li>
          <li>
            <button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
              free trial
            </button>
          </li>
        </ul>
      </div>
      {/* mobile screen */}
      {/* <div>
        <div className="lg:hidden cursor-pointer">
          <span onClick={toggleNavbar}>{isOpen ? "" : <FaBars />}</span>
        </div>
        {isOpen && ( 
        <div className="bg-color-primary-dark h-[100vh] absolute">
          <ul>
            <li>
              <a
                href="#home"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#testimonial"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Testimonial
              </a>
            </li>
            <li>
              <a
                href="#pricing"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#blog"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-color-secondary ease-in duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">
                free trial
              </button>
            </li>
          </ul>
        </div> )}
      </div> */}
       <div className="-mr-2 flex lg:hidden">
            <div className="lg:hidden cursor-pointer pr-5">
              <span onClick={toggleNavbar}>{isOpen ? <FaTimes /> : <FaBars />}</span>
            </div>
          </div>
        {/* </div> */}
      {/* </div> */}

      {isOpen && (
        <div className=" bg-color-primary-dark h-[100vh] absolute inset-0">
            <button onClick={toggleNavbar} className="flex justify-end pr-3 pt-2 absolute right-8 top-7"><FaTimes /> </button>

          <ul className="h-full grid place-items-center py-20">
            <li><a href="#home" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Home</a></li>
            <li><a href="#features" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Features</a></li>
            <li><a href="#testimonial" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Testimonial</a></li>
            <li><a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Pricing</a></li>
            <li><a href="#blog" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Blog</a></li>
            <li><a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">Contact</a></li>
           <li> <button className="block w-full px-3 py-2 mt-1 text-base font-medium text-left rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Free Trial</button></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
