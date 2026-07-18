import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24"
    >

      <div className="max-w-6xl mx-auto px-6">


        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:30
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6
          }}

          viewport={{
            once:true
          }}

          className="text-center mb-14"

        >

        
            <h2 className="section-title text-white mt-4">

            About Me

          </h2>


          <p className="text-slate-400 mt-4 text-lg">

            Get to know more about my background and expertise

          </p>


        </motion.div>





        <div className="grid md:grid-cols-2 gap-10">



          {/* Description Card */}


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
            bg-slate-950
            p-8
            rounded-3xl
            border
            border-slate-700
            text-center
            "

          >


            <h3 className="
              text-2xl
              font-semibold
              mb-5
            ">

              Computer Science Graduate & Developer

            </h3>




            <p className="
              text-slate-300
              leading-8
              "
            >

              I am a Computer Science graduate with a strong interest in
              Artificial Intelligence, Machine Learning, and Full Stack
              Development. I enjoy creating innovative solutions by combining
              programming, data-driven approaches, and modern technologies.

            </p>



            <p className="
              text-slate-300
              leading-8
              mt-5
              "
            >

              Throughout my academic journey, I have developed projects in
              Artificial Intelligence, Machine Learning, Computer Vision, Cybersecurity,
              Mobile Applications, Database Systems, and Software Engineering.

            </p>


          </motion.div>






          {/* Skills & Education Card */}



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
            bg-slate-950
            p-8
            rounded-3xl
            border
            border-slate-700
            text-center
            "

          >


            <h3 className="
              text-2xl
              font-semibold
              mb-6
            ">

              Academic Background

            </h3>




            <h4 className="
              text-xl
              text-cyan-400
              font-medium
            ">

              BS Computer Science

            </h4>



            <p className="text-slate-300 mt-2">

              Sukkur IBA University

            </p>



            <p className="text-slate-400 mt-1">

              2022 - 2026

            </p>





            <div className="mt-8 space-y-4">


              <div className="
                bg-slate-900
                p-4
                rounded-xl
                text-slate-300
              ">

                Artificial Intelligence & Machine Learning

              </div>



              <div className="
                bg-slate-900
                p-4
                rounded-xl
                text-slate-300
              ">

                Full Stack Web Development

              </div>




              <div className="
                bg-slate-900
                p-4
                rounded-xl
                text-slate-300
              ">

                Database Systems & Software Engineering

              </div>



            </div>



          </motion.div>



        </div>



      </div>


    </section>
  );
}

export default About;