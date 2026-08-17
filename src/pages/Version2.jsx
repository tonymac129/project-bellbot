import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Version2() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Bellbot Version 2 | Project Bellbot</title>
      <Hero title="Bellbot Version 2" />
      <div className="sections">
        <p className="evaluation-status">Developed by: Tony Hsu, Samuel Chow</p>
        <p className="evaluation-paragraph">Version 2 was developed based on the experiences gained from Bellbot Version 1, with a focus on improving
reliability, sound coverage, ease of operation, and minimizing cost.</p>
      </div>
    </motion.div>
  );
}

export default Version2;
