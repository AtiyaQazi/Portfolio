import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

function Experience() {

  const experiences = [
    {
      title: "AI/ML Intern",
      company: "StackHorizon",
      duration: "July 2026 - August 2026",
      description:
        "Worked as an AI/ML Intern at StackHorizon, gaining hands-on experience in machine learning workflows, data analysis, model development, and applying artificial intelligence techniques to solve real-world problems."
    },

     {
      title: "Final Year Project — AI & Cybersecurity Developer",
      company: "Sukkur IBA University",
      duration: "2025 - 2026",
      description:
        "Developed an Explainable AI-based Intrusion Detection System using Machine Learning techniques. Worked on data preprocessing, model training, evaluation, and providing interpretable security predictions."
    },
  ];


  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-20"
    >

      <div className="max-w-6xl mx-auto px-6">


        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

         <h2 className="section-title text-white mt-4">
            My Experience
          </h2>

          <p className="text-slate-400 mt-3">
            Professional experience and internships
          </p>

        </motion.div>



        {/* Experience Card */}
        <div className="relative border-l border-slate-700 ml-4">


          {experiences.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="ml-8 relative"
            >

              {/* Icon */}
              <div className="absolute -left-12 top-1 bg-blue-500 rounded-full p-3">
                <FaBriefcase />
              </div>


              {/* Card */}
              <div className="bg-slate-950 border border-slate-700 rounded-xl p-6 hover:border-blue-400 transition">

                <h3 className="text-2xl font-semibold">
                  {exp.title}
                </h3>


                <p className="text-blue-400 mt-2 text-lg">
                  {exp.company}
                </p>


                <p className="text-slate-400 text-sm mt-1">
                  {exp.duration}
                </p>


                <p className="text-slate-300 mt-4 leading-relaxed">
                  {exp.description}
                </p>


              </div>

            </motion.div>

          ))}


        </div>


      </div>

    </section>
  );
}

export default Experience;