import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";
import GalleryImg from "../components/GalleryImg";
import SmallHero from "../components/SmallHero";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 150 }}
      animate={{ opacity: 1, y: 0 }}
      class="parent-container"
    >
      <Hero
        title="Project Bellbot"
        description="Project Bellbot is a student-led project designed to automate the school bell system, specifically engineered with safety features to ensure it is suitable for use in a school setting with young children."
      />
      <div className="sections">
        <SmallHero
          description="
      Our goal is to create a safe and reliable bell-ringing robot, while sharing our passion and knowledge about robotics with the community."
        />
         <div class="videos">
            <h1 class="video-title">Forward Video Demo</h1>
            <video class="video" controls>
                <source src="bellbot_forwards.mp4" type="video/mp4"></source>
            </video>
            <h1 class="video-title">Backward Video Demo</h1>
            <video class="video" controls>
                <source src="bellbot_backwards.mp4" type="video/mp4"></source>
            </video>
         </div>
        
        <Section
          heading="Bellbot Safety Features"
          list={[
            "Operates on top of school lockers, keeping it out of reach of young children.",
            "Uses two distance sensors to ensure that the robot runs parallel to the wall.",
            "Monitors total distance of the two distance sensors to lockers to stay close to the wall.",
            "Utilizes sensors to trigger an emergency stop when the robot approaches the outer edge of the lockers.",
          ]}
        />
       
      </div>
    </motion.div>
  );
}

export default Home;
