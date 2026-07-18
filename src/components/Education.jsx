import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
} from "react-icons/fa";


const subjects = [
  "Artificial Intelligence",
  "Machine Learning",
  "Software Engineering",
  "Database Systems",
  "Web Development",
  "Operating Systems",
  "Computer Networks",
  "Cybersecurity",
  "Data Structures",
  "Android Development",
];


const education = [

  {
    degree: "Bachelor of Science in Computer Science",
    institute: "Sukkur IBA University",
    year: "2022 – 2026",
    description:
      "During my Bachelor's degree, I developed strong theoretical and practical knowledge in Software Engineering, Artificial Intelligence, Machine Learning, Database Systems, Mobile Application Development, Operating Systems, Computer Networks and Cybersecurity."
  },


  {
    degree: "Intermediate (Pre-Medical)",
    institute: "The City School Indus Campus Sukkur",
    year: "2021",
    description:
      "Completed Intermediate education in Pre-Medical with a strong foundation in science subjects and analytical learning skills."
  },


  {
    degree: "Matriculation (Science)",
    institute: "The City School Indus Campus Sukkur",
    year: "2019",
    description:
      "Completed Matriculation in Science, building a strong academic foundation in scientific concepts and problem-solving."
  },

];



export default function Education() {


  return (

    <section
      id="education"
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

          viewport={{
            once:true
          }}

          transition={{
            duration:.7
          }}

          className="text-center"

        >


          


          <h2 className="section-title text-white mt-4">
            

          Education

          </h2>




          <p className="section-subtitle mt-6">

            My academic background has provided me with a strong foundation
            in Computer Science, Artificial Intelligence, Software Development,
            and modern technologies.

          </p>



        </motion.div>






        {/* Education Cards */}


        <div className="
          max-w-5xl
          mx-auto
          mt-20
          space-y-8
        ">



          {education.map((item,index)=>(


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

              viewport={{
                once:true
              }}

              transition={{
                duration:.6,
                delay:index*0.15
              }}

              whileHover={{
                y:-5
              }}

              className="
              glass
              rounded-3xl
              p-8
              lg:p-10
              text-center
              "

            >



              {/* Icon */}

              <div className="
                w-14
                h-14
                mx-auto
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/20
                flex
                items-center
                justify-center
                text-cyan-400
                text-xl
                mb-6
              ">

                <FaGraduationCap />

              </div>





              <h3 className="
                text-2xl
                font-bold
                text-white
              ">

                {item.degree}

              </h3>





              <div className="
                flex
                justify-center
                flex-wrap
                gap-6
                mt-5
                text-slate-300
              ">



                <div className="
                  flex
                  items-center
                  gap-2
                ">

                  <FaUniversity className="text-cyan-400"/>

                  {item.institute}

                </div>




                <div className="
                  flex
                  items-center
                  gap-2
                ">

                  <FaCalendarAlt className="text-cyan-400"/>

                  {item.year}

                </div>


              </div>





              <p className="
                mt-6
                text-slate-300
                leading-8
              ">

                {item.description}

              </p>



            </motion.div>


          ))}



        </div>






        {/* Major Areas */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

          className="
          mt-16
          text-center
          "

        >


          <h4 className="
            text-xl
            font-semibold
            text-cyan-400
            mb-6
          ">

            Major Areas of Study

          </h4>




          <div className="
            flex
            flex-wrap
            justify-center
            gap-3
          ">


            {subjects.map((subject)=>(

              <span

                key={subject}

                className="
                px-4
                py-2
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                text-cyan-300
                text-sm
                "

              >

                {subject}

              </span>

            ))}


          </div>


        </motion.div>



      </div>


    </section>

  );

}