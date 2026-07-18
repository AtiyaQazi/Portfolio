import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";


const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "atiyaqazi64@gmail.com",
    link:
      "https://mail.google.com/mail/?view=cm&fs=1&to=atiyaqazi64@gmail.com",
  },

  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/AtiyaQazi",
    link:
      "https://github.com/AtiyaQazi",
  },

  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    value: "linkedin.com/in/attia-qamar-un-nisa-aa6854301",
    link:
      "https://www.linkedin.com/in/attia-qamar-un-nisa-aa6854301",
  },

  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    value: "Karachi, Sindh, Pakistan",
    link: null,
  },
];


export default function Contact() {

  return (

    <section
      id="contact"
      className="relative py-24"
    >


      {/* Background Glow */}

      <div
        className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-96
        h-96
        rounded-full
        bg-cyan-500/10
        blur-[170px]
        -z-10
        "
      ></div>



      <div className="container-custom">



        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          viewport={{
            once:true
          }}

          className="
          flex
          flex-col
          items-center
          text-center
          mb-16
          "

        >

        


          <h2 className="section-title mt-4 text-white">
            Contact
          </h2>


          <p className="section-subtitle mt-6 max-w-2xl">

            Feel free to reach out for AI/ML projects,
software development opportunities, internships,
or professional collaborations.

          </p>


        </motion.div>




        {/* Contact Cards */}


        <motion.div

          initial={{
            opacity:0,
            y:35
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.7
          }}

          viewport={{
            once:true
          }}

          className="
          flex
          justify-center
          "

        >


          <div
            className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
            w-full
            max-w-4xl
            "
          >



            {contacts.map((item,index)=>(


              <motion.div

                key={index}

                whileHover={{
                  y:-8
                }}

                transition={{
                  duration:0.3
                }}

                className="
                glass
                rounded-3xl
                p-8
                flex
                flex-col
                items-center
                justify-center
                text-center
                min-h-[230px]
                "

              >


                {/* Icon */}

                <div
                  className="
                  w-16
                  h-16
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-400
                  text-2xl
                  mb-5
                  "
                >

                  {item.icon}

                </div>




                <h3 className="text-xl font-semibold text-white mb-3">

                  {item.title}

                </h3>




                {item.link ? (

                  <a

                    href={item.link}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                    text-slate-300
                    hover:text-cyan-400
                    transition
                    break-all
                    "

                  >

                    {item.value}

                  </a>


                ) : (


                  <p className="text-slate-300">

                    {item.value}

                  </p>


                )}



              </motion.div>


            ))}



          </div>


        </motion.div>


      </div>


    </section>

  );
}