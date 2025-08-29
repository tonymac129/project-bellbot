import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Section from "./components/Section";
import SideBtn from "./components/SideBtn";

function App() {
  const [mode, setMode] = useState(localStorage.getItem("ecs-mode") ? JSON.parse(localStorage.getItem("ecs-mode")) : false);

  useEffect(() => {
    if (mode) {
      document.body.classList.add("light");
      localStorage.setItem("ecs-mode", true);
    } else {
      document.body.classList.remove("light");
      localStorage.setItem("ecs-mode", false);
    }
  }, [mode]);

  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <Hero title="ECS Bell Robot" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
      <div className="sections">
        <Section
          heading="Fully Autonomous Bell Ringing Robot"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem deserunt, magnam temporibus eos quis perspiciatis amet! Soluta esse ut deleniti laudantium illo reiciendis delectus error vel ad! Ut, deserunt.
      Soluta in adipisci quisquam delectus eveniet provident recusandae, odio deserunt possimus veniam a ut omnis minima repellat facere velit vel quam? Atque rerum dolores quaerat labore quo porro perferendis quam!"
          img="/ecs-bell-bot-site/robot.jpg"
          odd={true}
        />
        <Section
          heading="Fully Autonomous Bell Ringing Robot"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem deserunt, magnam temporibus eos quis perspiciatis amet! Soluta esse ut deleniti laudantium illo reiciendis delectus error vel ad! Ut, deserunt.
      Soluta in adipisci quisquam delectus eveniet provident recusandae, odio deserunt possimus veniam a ut omnis minima repellat facere velit vel quam? Atque rerum dolores quaerat labore quo porro perferendis quam!"
          img="/ecs-bell-bot-site/robot.jpg"
        />
        <Section
          heading="Fully Autonomous Bell Ringing Robot"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem deserunt, magnam temporibus eos quis perspiciatis amet! Soluta esse ut deleniti laudantium illo reiciendis delectus error vel ad! Ut, deserunt.
      Soluta in adipisci quisquam delectus eveniet provident recusandae, odio deserunt possimus veniam a ut omnis minima repellat facere velit vel quam? Atque rerum dolores quaerat labore quo porro perferendis quam!"
          img="/ecs-bell-bot-site/robot.jpg"
          odd={true}
        />
      </div>
      <div className="side-btns">
        <SideBtn
          img="/ecs-bell-bot-site/source.svg"
          onClick={() => window.open("https://github.com/amcsz/bell")}
          title="View source code"
        />
        <SideBtn img="/ecs-bell-bot-site/mode.svg" onClick={() => setMode(!mode)} title="Toggle light mode" />
      </div>
    </motion.div>
  );
}

export default App;
