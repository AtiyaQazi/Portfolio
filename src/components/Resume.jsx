import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="resume" className="relative py-20">

      {/* Background Glow */}
      <div
        className="
        absolute
        left-1/2
        top-0
        -translate-x-1/2
        w-[420px]
        h-[420px]
        bg-cyan-500/10
        blur-[180px]
        rounded-full
        -z-10
        "
      ></div>


      <div className="container-custom">


        <motion.div

          initial={{
            opacity: 0,
            y: 40
          }}

          whileInView={{
            opacity: 1,
            y: 0
          }}

          transition={{
            duration: 0.7
          }}

          viewport={{
            once: true
          }}

          className="
          glass
          rounded-3xl
          px-8
          py-16
          lg:px-16
          lg:py-20
          text-center
          "

        >


         


          <h2 className="section-title mt-4 text-white">
            
            My Resume
          </h2>



          <p className="section-subtitle mt-6 max-w-2xl mx-auto">

            Download my latest CV to explore my education,
            technical skills, AI/ML projects, software
            development experience and professional journey.

          </p>




          {/* Download Button */}

          <div className="flex justify-center mt-14">

            <a

              href="/CV.pdf"

              download="Attia_Qamar_un_Nisa_CV.pdf"

              className="
              btn-primary
              flex
              items-center
              gap-3
              "

            >

              <FaDownload />

              Download CV


            </a>


          </div>



        </motion.div>


      </div>


    </section>
  );
}