import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Evaluation() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Bellbot v1 Evaluation Study | Project Bellbot</title>
      <Hero title="Bellbot v1 Evaluation Study" />
      <div className="sections">
        <p className="evaluation-status">Last Update: January 2026</p>
        <div className="gap">
          <p className="evaluation-paragraph">
            The purpose of this study is to evaluate the Bellbot's readiness for long-term use at a Sunday language school and to
            share experience that can help future makers continue to improve the project.
          </p>
          <p className="evaluation-paragraph">
            We measured sound levels and collected teachers' feedback using a 10-question survey. Bellbot performance data were
            collected over four weeks, since the core algorithm development was completed. Path repeatability was assessed and the
            number of missing bell incidents were recorded.
          </p>
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
        <ul className="evaluation-list">
          <li className="evaluation-paragraph">
            We collected 16 surveys from the teachers with a response rate of 57.1%. The analysis was based on a limited sample
            size and may not represent all teachers in a specific location.{" "}
          </li>
          <li className="evaluation-paragraph">
            When asked whether the Bellbot caused distraction or disruption in the classroom, 87.5% of respondents reported never,
            and 12.5% reported rarely. In addition, 75% reported no safety concerns, while 25% indicated they were unsure about
            potential safety concerns.
          </li>
          <li className="evaluation-paragraph">
            We received 100% support from teachers, with all respondents reporting support or strong support for the project. In
            addition, 87.5% supported building another Bellbot in the future.{" "}
          </li>
        </ul>
        <h3 className="evaluation-title">C. Reliability</h3>
        <div className="gap-x">
          <img src="/project-bellbot/evaluation5.png" className="evaluation-img" />
          <img src="/project-bellbot/evaluation6.png" className="evaluation-img" />
        </div>
        <ul className="evaluation-list">
          <li className="evaluation-paragraph">
            The Bellbot successfully rang 14 out of 16 scheduled times (87.5% success rate). The two missing bell events were
            caused by (1) the operator forgetting to remove the silent foam and (2) a loosened Control Hub plug that resulted in a
            Wi-Fi disconnection.
          </li>
          <li className="evaluation-paragraph">
            The average distance traveled during forward and backward run is 17.7 feet (standard deviation: 0.21 feet) and 17.5
            feet (standard deviation: 0.34 feet). No outliers were observed. Within the same day, the distance traveled during the
            first run was consistently longer, likely due to battery depletion in subsequent runs.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Evaluation;
