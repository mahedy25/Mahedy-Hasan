import { motion } from "framer-motion";
// Example: Import your SVG icons
import { HtmlIcon, CssIcon, TailwindIcon, JavaScriptIcon, ReactIcon, NextJsIcon,  FramermotionLogo } from "./Icons";

const skills = [
  { name: "HTML5", Icon: HtmlIcon },
  { name: "CSS", Icon: CssIcon },
  { name: "Tailwind CSS", Icon: TailwindIcon },
  { name: "JavaScript", Icon: JavaScriptIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Next.js", Icon: NextJsIcon },
  { name: "Framer motion", Icon: FramermotionLogo },
];

const skillVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.2, type: "spring", stiffness: 150 },
  }),
};

const SkillsSection = () => {
  return (
    <section className="w-full h-full ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl xl:text-7xl py-8 xl:py-14 text-black font-bold">My Skills</h2>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map((skill, index) => (
            <motion.div
            whileHover={{y:-3}}
              key={skill.name}
              custom={index}
              variants={skillVariant}
              className="bg-white  hover:bg-gradient-to-r from-red-500 border-2 border-black to-fuchsia-500 rounded-lg flex w-full  h-full items-center shadow-[7px_7px_0px_#333] justify-center px-2 py-4 gap-2"
            >
              {/* SVG Icon */}
              <skill.Icon className=" justify-center items-center  h-24 text-white" />
              {/* Skill Name */}
              <h1 className="text-lg text-center items-center flex md:text-xl lg:text-2xl h-full text-black w-full font-bold font-mono">
                {skill.name}
              </h1>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
