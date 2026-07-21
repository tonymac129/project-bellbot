import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Version1() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Bellbot Version 1 Evaluation | Project Bellbot</title>
      <Hero title="Bellbot Version 1 Evaluation" />
      <div className="sections">
        <p className="evaluation-status">Developed by: Samuel Chow, Jonathan Tsai, Tony Hsu, Meng-Chen Shih</p>
        <div className="gap">
        </div>
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
        <h2 className="section-title">Key Findings</h2>
        <h3 className="evaluation-title">A. Sound Coverage</h3>
        <div className="gap-x">
          <img src="/project-bellbot/evaluation1.png" className="evaluation-img" />
          <img src="/project-bellbot/evaluation2.png" className="evaluation-img" />
        </div>
        <h3 className="evaluation-title">B. Teacher's Feedback</h3>
        <div className="gap-x">
          <img src="/project-bellbot/evaluation3.png" className="evaluation-img" />
          <img src="/project-bellbot/evaluation4.png" className="evaluation-img" />
        </div>
        <h3 className="evaluation-title">C. Reliability</h3>
        <div className="gap-x">
          <img src="/project-bellbot/evaluation5.png" className="evaluation-img" />
          <img src="/project-bellbot/evaluation6.png" className="evaluation-img" />
        </div>
      </div>
    </motion.div>
  );
}

export default Version1;
