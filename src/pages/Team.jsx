import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Person from "../components/Person";
import HeroImg from "../components/HeroImg"

function Team() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Meet the Makers | Project Bellbot</title>
      <Hero
        title="Meet the Makers"
      />
      <HeroImg src="/project-bellbot/team.jpg" caption="From left to right: Chen, Samuel, Jonathan, Tony"></HeroImg>
      <div className="people">
        <Person name="Samuel Chow" roles={["Founder", "Project Lead"]} description={"Initiated the Bellbot concept; designed the system architecture and developed the core bellringing and navigation algorithms; designed and led the evaluation study; conducted data analysis; and authored the final evaluation report."} />
        <Person name="Jonathan Tsai" roles={["Cofounder", "Lead Engineer"]} description={"Led the mechanical build of the prototype; supported hardware adjustments and system testing."} />
        <Person name="Tony Hsu" roles={["Programmer", "Webmaster"]} description={"Developed and managed the Bellbot website; assisted in algorithm development; supported system testing; participated in data collection during testing; conducted data analysis and co-authored the final evaluation report."} link="https://tonymac129.github.io/" />
        <Person name="Meng-Chen Shih" roles={["Engineer"]} description={"Assisted in modifying and refining the structural prototype; assisted in algorithm development; supported system testing; participated in data collection during testing."} />
      </div>
    </motion.div>
  );
}

export default Team;
