import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";

function Home() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <Hero
        title="Project Bellbot"
        description="Our goal is to create a safe and reliable bell-ringing robot, while sharing our passion and knowledge about robotics with the community."
      />
      <div className="sections">
        <Section
          heading="Fully Autonomous Bell Ringing Robot"
          text="
      Project Bellbot is a student-led project designed to automate the school bell system, specifically engineered with safety features to ensure it is suitable for use in a school setting with young children."
          img="/project-bellbot/robot1.png"
          odd={true}
        />
        <Section
          heading="Bellbot Safety Features"
          list={[
            "Operating on top of school lockers, keeping it out of reach of young children.",
            "Using two distance sensors to ensure that the robot runs parallel to the wall.",
            "Traveling at a slight angle toward the wall to stay close, minimizing the risk of falling or being disturbed.",
            "Utilizing sensors to trigger an emergency stop when the robot approaches the outer edge of the lockers.",
          ]}
          img="/project-bellbot/robot2.png"
        />
      </div>
    </motion.div>
  );
}

export default Home;
