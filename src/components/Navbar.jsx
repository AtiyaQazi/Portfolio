import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {

  const [open, setOpen] = useState(false);


  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];


  return (

    <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-slate-950/90
      backdrop-blur-md
      text-white
    ">


      <div className="
        max-w-6xl
        mx-auto
        px-6
        py-4
        flex
        justify-between
        items-center
      ">


        {/* Logo */}

        <a
          href="#home"
          className="text-2xl font-bold tracking-wide"
        >

          <span className="text-cyan-400"></span>

        </a>





        {/* Desktop Menu */}

        <ul className="
          hidden
          lg:flex
          gap-7
          text-sm
          font-medium
          items-center
        ">


          {links.map((link)=>(

            <li key={link.name}>

              <a

                href={link.href}

                className="
                hover:text-cyan-400
                transition
                duration-300
                "

              >

                {link.name}

              </a>

            </li>

          ))}


        </ul>





        {/* Hire Me Button */}

        <a

          href="#contact"

          className="
          hidden
          md:block
          bg-cyan-500
          hover:bg-cyan-600
          text-slate-950
          px-5
          py-2.5
          rounded-full
          font-semibold
          transition
          "

        >

          Hire Me

        </a>






        {/* Mobile Button */}

        <button

          className="lg:hidden text-xl"

          onClick={()=>setOpen(!open)}

        >

          {open ? <FaTimes/> : <FaBars/>}

        </button>



      </div>





      {/* Mobile Menu */}

      {open && (

        <div className="
          lg:hidden
          bg-slate-900
          px-6
          py-6
        ">


          <ul className="space-y-5">


            {links.map((link)=>(

              <li key={link.name}>

                <a

                  href={link.href}

                  onClick={()=>setOpen(false)}

                  className="
                  block
                  hover:text-cyan-400
                  transition
                  "

                >

                  {link.name}

                </a>

              </li>

            ))}



            <li>

              <a

                href="#contact"

                onClick={()=>setOpen(false)}

                className="
                inline-block
                bg-cyan-500
                text-slate-950
                px-6
                py-2.5
                rounded-full
                font-semibold
                "

              >

                Hire Me

              </a>


            </li>


          </ul>


        </div>


      )}


    </nav>

  );

}


export default Navbar;