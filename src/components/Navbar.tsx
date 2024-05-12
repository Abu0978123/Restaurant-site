

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center">
      <div className=" py-5 text-color-secondary font-bold text-3xl">
        <a href="#atom">
            <span className="text-color-white mr-2">
             Abubakar  
            </span>
             site
        </a>
      </div>
      <div>
        <ul className="flex items-center space-x-6">
            <li><a href="#home" className="hover:text-color-secondary ease-in duration-200">Home</a></li>
            <li><a href="#features" className="hover:text-color-secondary ease-in duration-200">Features</a></li>
            <li><a href="#testimonial" className="hover:text-color-secondary ease-in duration-200">Testimonial</a></li>
            <li><a href="#pricing" className="hover:text-color-secondary ease-in duration-200">Pricing</a></li>
            <li><a href="#blog" className="hover:text-color-secondary ease-in duration-200">Blog</a></li>
            <li><a href="#contact" className="hover:text-color-secondary ease-in duration-200">Contact</a></li>
            <li><button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold hover:opacity-80 ease-in duration-200">free trial</button></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar