import { motion } from "framer-motion";
import Hero from "../components/Hero";
import GalleryImg from "../components/GalleryImg";

function Gallery() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Photo Gallery | Project Bellbot</title>
      <Hero title="Photo Gallery" />
      <div className="people">
        <GalleryImg src="/project-bellbot/robot1.png" caption="Isometric View" />
        <GalleryImg src="/project-bellbot/robot2.png" caption="Front View" />
        <GalleryImg src="/project-bellbot/robot3.png" caption="Initial Design" />
        <GalleryImg src="/project-bellbot/robot4.png" caption="Concept Art" />
      </div>
    </motion.div>
  );
}

export default Gallery;
