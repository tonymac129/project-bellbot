import { motion } from "framer-motion";
import Hero from "../components/Hero";
import HeroImg from "../components/HeroImg";
import Section from "../components/Section";
import GalleryImg from "../components/GalleryImg";
import SmallHero from "../components/SmallHero";
import Person from "../components/Person";

function Home() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }} class="parent-container">
      <Hero
        title="Project Bellbot"
        description="Project Bellbot is a student-led effort to develop an automated mechanical bell-ring system for a community-based volunteer-run Sunday Language School. The system was engineered to provide a reliable, safe and affordable solution. With multiple design iterations, we gathered user feedback, and continuously improved the design."
      />

    <div className="sections">
        <Section heading="Project Timeline" />
    </div>

      <div className="timeline-section">
        <div className="timeline-container">
        <h3 className="timeline-version-title">Version 1</h3>
          <div className="timeline">
            <div className="timeline-group">
              
              <div className="timeline-version-items">
                <div className="timeline-item">
                  <div className="timeline-date">2025-Mar</div>
                  <div className="timeline-desc">Bellbot concept proposed</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2025-May</div>
                  <div className="timeline-desc">Project requirements defined and potential solutions brainstormed</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2025-Aug</div>
                  <div className="timeline-desc">Mechanical prototype developed</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2025-Sep</div>
                  <div className="timeline-desc">System deployment</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2025-Sep to Nov</div>
                  <div className="timeline-desc">Software integration, automation development, and field testing</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2025-Nov</div>
                  <div className="timeline-desc">Sound levels and teacher feedback evaluated</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2026-Jan</div>
                  <div className="timeline-desc">Evaluation report shared with teachers. Knowledge transfer report shared with Version 2 Project Lead.</div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="timeline-version-title">Version 2</h3>
          <div className="timeline">
            <div className="timeline-group">
              
              <div className="timeline-version-items">
                <div className="timeline-item">
                  <div className="timeline-date">2026-Mar</div>
                  <div className="timeline-desc">Concept selection which includes microcontroller platform, bell-ringing mechanism, and overall system architecture</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2026-Apr</div>
                  <div className="timeline-desc">Mechanism prototyping and initial CAD design</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2026-Jun</div>
                  <div className="timeline-desc">Structural frame assembly</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2026-Jul to Sep</div>
                  <div className="timeline-desc">Mechanical systems testing and software integration</div>
                </div>
                {/* <div className="timeline-item">
                  <div className="timeline-date">2026-Aug</div>
                  <div className="timeline-desc">Performance optimization and mobile app development</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2026-Sep</div>
                  <div className="timeline-desc">System deployment</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>


      <Hero
        title="Meet the Makers"
      />

      <div className="sections">
        <Section heading="Version 2" />
        </div>

        <div className="people">
        <Person name="Tony Hsu" roles={[]} description={""} />
        <Person name="Samuel Chow" roles={[]} description={""} />
      </div>

      <div className="sections">
        <Section heading="Version 1" />
        </div>
      <HeroImg src="/project-bellbot/team.jpg" caption="From left to right: Chen, Samuel, Jonathan, Tony"></HeroImg>
      <div className="people">
        <Person name="Samuel Chow" roles={["Founder", "Project Lead"]} description={"Initiated the Bellbot concept; designed the system architecture and developed the core bellringing and navigation algorithms; designed and led the evaluation study; conducted data analysis; and authored the final evaluation report."} />
        <Person name="Jonathan Tsai" roles={["Cofounder", "Lead Engineer"]} description={"Led the mechanical build of the prototype; supported hardware adjustments and system testing."} />
        <Person name="Tony Hsu" roles={["Programmer", "Webmaster"]} description={"Developed and managed the Bellbot website; assisted in algorithm development; supported system testing; participated in data collection during testing; conducted data analysis and co-authored the final evaluation report."} link="https://tonymac129.github.io/" />
        <Person name="Meng-Chen Shih" roles={["Engineer"]} description={"Assisted in modifying and refining the structural prototype; assisted in algorithm development; supported system testing; participated in data collection during testing."} />
      </div>
    </motion.div>
  );
}

export default Home;
