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
        description="Bellbot is a student-led project to build an automated bell-ringing system for a Sunday Language School. We wanted to create something practical, reliable, and affordable that could help the school. We built and tested different versions, collected feedback from users, and made improvement along the way."
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
                  <div className="timeline-desc">Evaluation report shared with teachers.</div>
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
                  <div className="timeline-desc">Initial system design which includes microcontroller platform, bell-ringing mechanism, and overall system architecture</div>
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
                  <div className="timeline-desc">Mechanical systems testing and software development and integration</div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-date">2026-Oct</div>
                  <div className="timeline-desc">Bell scheduling, app-based control features, and system testing</div>
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
        <Section heading="Version 1" />
        </div>
      <HeroImg src="/project-bellbot/team.jpg" caption="From left to right: Chen, Samuel, Jonathan, Tony"></HeroImg>
      <div className="people">
        <Person name="Samuel Chow" roles={["Project Lead"]} description={"Original concept, core system design, mechanical design, prototype construction, navigation algorithm development, hardware-software integration, system evaluation"} />
        <Person name="Jonathan Tsai" roles={["Lead Engineer"]} description={"Mechanical design, prototype construction, mechanical modifications"} />
        <Person name="Tony Hsu" roles={["Programmer", "Webmaster"]} description={"Website development, algorithm development, system evaluation"} />
        <Person name="Meng-Chen Shih" roles={["Engineer"]} description={"Mechanical refinement, algorithm development, system evaluation"} />
      </div>

      <div className="sections">
        <Section heading="Version 2" />
        </div>

        <div className="people">
        <Person name="Tony Hsu" roles={["Project Lead"]} description={"Core system design, Mechanical Design and Construction, Software Development and Integration, App-Based Control Development"} />
        <Person name="Samuel Chow" roles={["Systems Engineer"]} description={"Core System Design, Mechanical Design and Construction"} />
      </div>
    </motion.div>
  );
}

export default Home;
