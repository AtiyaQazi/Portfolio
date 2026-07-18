import { motion } from "framer-motion";
import { FaGithub, FaArrowRight } from "react-icons/fa";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">

      {/* Background Glow */}
      <div className="absolute right-0 top-20 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full"></div>


      <div className="container-custom">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

         


          <h2 className="section-title text-white mt-4">
            Featured Projects
          </h2>


          <p className="section-subtitle mt-6">
            A collection of Artificial Intelligence, Machine Learning,
            Computer Vision, Android Development, Database Systems,
            and Software Engineering projects completed throughout
            my academic journey.
          </p>


        </motion.div>



        {/* Project Cards */}

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">


          {projects.map((project, index) => (

            <motion.div

              key={project.id}

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.08
              }}

              viewport={{
                once: true
              }}

              whileHover={{
                y: -10
              }}

              className="
              glass 
              rounded-3xl 
              p-8 
              flex 
              flex-col 
              h-full
              "
            >


              {/* Project Number */}

              <span className="text-6xl font-bold text-cyan-500/15">

                {String(index + 1).padStart(2, "0")}

              </span>



              {/* Category */}

              <div className="mt-5">

                <span
                  className="
                  inline-flex
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500/20
                  px-4
                  py-2
                  text-sm
                  text-cyan-300
                  "
                >

                  {project.category}

                </span>

              </div>



              {/* Title */}

              <h3
                className="
                mt-6
                text-2xl
                font-bold
                text-white
                leading-snug
                "
              >

                {project.title}

              </h3>



              {/* Description */}

              <p
                className="
                mt-5
                text-slate-300
                leading-8
                flex-grow
                "
              >

                {project.description}

              </p>




              {/* Technology Stack */}

              <div className="flex flex-wrap gap-2 mt-7">

                {project.tech?.map((tech) => (

                  <span

                    key={tech}

                    className="
                    px-3
                    py-1
                    rounded-full
                    bg-slate-800
                    border
                    border-slate-700
                    text-slate-300
                    text-xs
                    "

                  >

                    {tech}

                  </span>

                ))}


              </div>




              {/* Github Button */}

              <a

                href={project.github}

                target="_blank"

                rel="noopener noreferrer"

                className="
                btn-primary
                mt-8
                justify-center
                gap-3
                "

              >

                <FaGithub />

                GitHub Repository

                <FaArrowRight size={13} />


              </a>



            </motion.div>


          ))}


        </div>


      </div>


    </section>
  );
}