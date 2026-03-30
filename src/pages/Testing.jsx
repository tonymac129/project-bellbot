import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";

function Testing() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Timeline | Project Bellbot</title>
      <Hero title="Timeline" />
      <div className="timeline-section">
        <div className="timeline-container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2025-March</div>
              <div className="timeline-desc">Bellbot concept proposed</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025-May</div>
              <div className="timeline-desc">Project requirements defined and brainstorming potential solutions</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025-Aug</div>
              <div className="timeline-desc">First prototype assembled</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025-Sept to Nov</div>
              <div className="timeline-desc">Iteration testing</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025-Nov</div>
              <div className="timeline-desc">Sound level study and teacher survey study</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025-Dec</div>
              <div className="timeline-desc">V1 retired, hardware dismantled and returned</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2026-Jan</div>
              <div className="timeline-desc">Evaluation report delivered to school</div>
            </div>
          </div>
        </div>
      </div>
      <div className="sections">
        <Section heading="Testing Timeline" />
      </div>

      <div className="people">
        <table className="testing-table">
          <thead>
            <tr>
              <th></th>
              <th>Phase 1</th>
              <th>Phase 2</th>
              <th>Launch Automation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Duration</td>
              <td>1-2 Weeks</td>
              <td>8 Weeks</td>
              <td>After Testing</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>After-school hours</td>
              <td>Regular bell schedule</td>
              <td>Regular bell schedule</td>
            </tr>
            <tr>
              <td>Tasks</td>
              <td>Testing robot onsite, improve and refine the design if needed</td>
              <td>Robot runs independently with human supervision, improve and refine the design if needed</td>
              <td>Robot runs independently, support by technical team</td>
            </tr>
            <tr>
              <td>Tests and Evaluations</td>
              <td>Evaluated by technical team (alignment, reliability)</td>
              <td>
                Document all incidents (unexpected movements or tilts), data collection (number of cycle complete without issues,
                timing accuracy, battery life), teachers' or parents' feedback (sound level, safety concerns)
              </td>
              <td>Routine check by technical team once per month (check for loose screws, part replacements, etc.)</td>
            </tr>
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default Testing;
