import { motion } from "framer-motion";
import Hero from "../components/Hero";

function Testing() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Testing and Evaluation | Project Bellbot</title>
      <Hero title="Testing and Evaluation" />
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
              <td>After School Board Approval</td>
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
                Document all incidents (unexpected movements or tilts), data collection (number of cycle complete without error,
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
