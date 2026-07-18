import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-slate-950 text-white flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
         

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
  Attia
  <br className="sm:hidden" />
  <span className="sm:ml-2">
    Qamar-un-Nisa
  </span>
</h1>

          <h2 className="text-2xl md:text-3xl mt-4 text-slate-300">
            Computer Science Graduate | 
            <span className="text-blue-400"> AI & Full Stack Developer</span>
          </h2>

          <p className="mt-6 text-slate-400 leading-relaxed max-w-xl">
            I build intelligent applications and modern web solutions using
            Artificial Intelligence, Machine Learning, React, Python, and
            database technologies. Passionate about solving real-world
            problems through technology.
          </p>


          {/* Buttons */}
          <div className="flex gap-4 mt-8">

            <a
              href="#projects"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium transition"
            >
              View Projects
            </a>

            <a
              href="/CV.pdf"
              download
              className="border border-blue-500 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-500 transition"
            >
              <FaDownload />
              Resume
            </a>

          </div>


          {/* Social Links */}
          <div className="flex gap-5 mt-8 text-2xl">

            <a
              href="https://github.com/AtiyaQazi"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/attia-qamar-un-nisa-aa6854301"
              target="_blank"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>



        {/* Right Side Tech Card */}
<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="flex justify-center"
>

  {/* Box ka size thora adjust kiya taake naye items fit aa saken (w-80 se max-w-sm aur py-8 kiya) */}
  <div className="w-full max-w-sm py-8 rounded-2xl border border-slate-700 bg-slate-900 flex flex-col justify-center items-center shadow-xl px-6">

    <h3 className="text-2xl font-semibold mb-6">
      Tech Stack
    </h3>

    {/* text-center aur justify-items-center se sab beech mein aayega */}
    <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-slate-300 w-full text-center justify-items-center">

      <span>React.js</span>
      <span>Python</span>
      <span>NLP/ML</span>
      <span>JavaScript/Typescript</span>
      <span>HTML/CSS</span>
      <span>Tailwind CSS</span>
      
      {/* Naye items jo add kiye hain */}
      <span>Node.js/ Express.js</span>
      <span>SQL/MongoDB</span>
      <span>Git / GitHub</span>
      <span>REST APIs</span>

    </div>

  </div>

</motion.div>


      </div>
    </section>
  );
}

export default Hero;