import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaBrain,
  FaTools,
  FaLaptopCode,
} from "react-icons/fa";


const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    skills: [
      "Python",
      "Java",
      "C++",
      "C",
      "JavaScript",
      "Kotlin",
      "HTML",
      "CSS",
      "LaTeX",
    ],
  },


  {
    title: "Databases & Data",
    icon: <FaDatabase />,
    skills: [
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "Data Analysis",
    ],
  },


  {
    title: "Web Development",
    icon: <FaLaptopCode />,
    skills: [
      "React.js",
      "Tailwind CSS",
      "REST APIs",
      "Node.js",
      "Express.js",
    ],
  },


  {
    title: "AI & Machine Learning",
    icon: <FaBrain />,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Scikit-learn",
      "Hugging Face",
    ],
  },


  {
    title: "Tools & Platforms",
    icon: <FaTools />,
    skills: [
      "Git",
      "GitHub",
      "Android Studio",
      "VS Code",
      "Postman",
      "Cloud Deployment",
      "Linux",
      "Windows",
    ],
  },
];



export default function Skills() {


  return (

    <section
      id="skills"
      className="relative py-24"
    >


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

          className="text-center mb-16"

        >


         


          <h2 className="section-title text-white mt-4">
             Skills
          </h2>


          <p className="section-subtitle mt-6">

            A strong foundation in software development,
            artificial intelligence, databases, and modern
            technology tools with hands-on project experience.

          </p>


        </motion.div>





        {/* Skill Cards */}


        <div className="
          grid
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        ">


          {skillCategories.map((category,index)=>(


            <motion.div

              key={index}

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index*0.1
              }}

              viewport={{
                once:true
              }}

              whileHover={{
                y:-8
              }}

              className="
              glass
              rounded-3xl
              p-8
              text-center
              "

            >


              {/* Icon */}

              <div className="
                w-16
                h-16
                mx-auto
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                flex
                items-center
                justify-center
                text-cyan-400
                text-2xl
                mb-6
              ">

                {category.icon}

              </div>




              <h3 className="
                text-xl
                font-bold
                text-white
                mb-6
              ">

                {category.title}

              </h3>




              <div className="
                flex
                flex-wrap
                justify-center
                gap-3
              ">


                {category.skills.map((skill)=>(


                  <span

                    key={skill}

                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-800
                    border
                    border-slate-700
                    text-slate-300
                    text-sm
                    hover:text-cyan-400
                    transition
                    "

                  >

                    {skill}

                  </span>


                ))}


              </div>



            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );

}