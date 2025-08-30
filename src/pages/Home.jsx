import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";

function Home() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <Hero title="ECS Bell Robot" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
      <div className="sections">
        <Section
          heading="Fully Autonomous Bell Ringing Robot"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem deserunt, magnam temporibus eos quis perspiciatis amet! Soluta esse ut deleniti laudantium illo reiciendis delectus error vel ad! Ut, deserunt.
      Soluta in adipisci quisquam delectus eveniet provident recusandae, odio deserunt possimus veniam a ut omnis minima repellat facere velit vel quam? Atque rerum dolores quaerat labore quo porro perferendis quam!"
          img="/ecs-bell-bot-site/robot1.png"
          odd={true}
        />
        <Section
          heading="Fully Autonomous Bell Ringing Robot"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem deserunt, magnam temporibus eos quis perspiciatis amet! Soluta esse ut deleniti laudantium illo reiciendis delectus error vel ad! Ut, deserunt.
      Soluta in adipisci quisquam delectus eveniet provident recusandae, odio deserunt possimus veniam a ut omnis minima repellat facere velit vel quam? Atque rerum dolores quaerat labore quo porro perferendis quam!"
          img="/ecs-bell-bot-site/robot2.png"
        />
        <Section
          heading="Fully Autonomous Bell Ringing Robot"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem deserunt, magnam temporibus eos quis perspiciatis amet! Soluta esse ut deleniti laudantium illo reiciendis delectus error vel ad! Ut, deserunt.
      Soluta in adipisci quisquam delectus eveniet provident recusandae, odio deserunt possimus veniam a ut omnis minima repellat facere velit vel quam? Atque rerum dolores quaerat labore quo porro perferendis quam!"
          img="/ecs-bell-bot-site/robot2.png"
          odd={true}
        />
      </div>
    </motion.div>
  );
}

export default Home;
