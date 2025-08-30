import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Section from "../components/Section";

function Gallery() {
  return (
    <motion.div initial={{ opacity: 0, y: 150 }} animate={{ opacity: 1, y: 0 }}>
      <title>Photo Gallery | ECS Bell Robot</title>
      <Hero title="Photo Gallery" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit." />
      <div className="sections">
        <Section
          heading="Fully Autonomous Bell Ringing Robot"
          text="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel autem deserunt, magnam temporibus eos quis perspiciatis amet! Soluta esse ut deleniti laudantium illo reiciendis delectus error vel ad! Ut, deserunt.
      Soluta in adipisci quisquam delectus eveniet provident recusandae, odio deserunt possimus veniam a ut omnis minima repellat facere velit vel quam? Atque rerum dolores quaerat labore quo porro perferendis quam!"
          img="/ecs-bell-bot-site/robot1.png"
          odd={true}
        />
      </div>
    </motion.div>
  );
}

export default Gallery;
