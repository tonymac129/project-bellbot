import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";

function Timeline() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Timeline | Project Bellbot</title>
      

      <div className="sections">
        <Section heading="Project Timeline" />
      </div>
    </motion.div>
  );
}

export default Timeline;
