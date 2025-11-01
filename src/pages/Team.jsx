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
        <Person name="Samuel Chow" roles={["Founder", "Project Lead"]} link="https://amcsz.me/" />
        <Person name="Jonathan Tsai" roles={["Cofounder", "Lead Engineer"]} />
        <Person name="Tony Hsu" roles={["Programmer", "Webmaster"]} link="https://tonymac129.github.io/" />
        <Person name="Meng-Chen Shih" roles={["Engineer"]} />
      </div>
    </motion.div>
  );
}

export default Team;
