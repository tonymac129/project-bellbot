import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Person from "../components/Person";

function Team() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Meet the Makers | Project Bellbot</title>
      <Hero
        title="Meet the Makers"
        description={
          "“For me, this project isn’t just about making some big invention. It’s about having fun with the designing process, keeping a school tradition, and giving back to my community.” - Samuel Chow, Founder"
        }
      />
      <div className="people">
        <Person name="Samuel Chow" roles={["Founder", "Project Lead"]} link="https://amcsz.me/" />
        <Person name="Jonathan Tsai" roles={["Cofounder", "Engineer"]} />
        <Person name="Tony Hsu" roles={["Programmer", "Webmaster"]} link="https://tonymac129.github.io/" />
        <Person name="Chen Shih" roles={["Engineer"]} />
      </div>
    </motion.div>
  );
}

export default Team;
