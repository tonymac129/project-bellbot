import { motion } from "framer-motion";

function Section({ heading, text = null, list = null, img = null, odd = false }) {
  return (
    <motion.div
      initial={{ y: 150 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.7, type: "spring" }}
      viewport={{ once: true, amount: 0.2 }}
      className="section"
    >
      {img && odd && <img src={img} className="section-img" />}
      <div className="section-content">
        <h2 className="section-title">{heading}</h2>
        <p className="section-text">{text && text}</p>
        {list && (
          <ul className="section-text">
            {list.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        )}
      </div>
      {img && !odd && <img src={img} className="section-img" />}
    </motion.div>
  );
}

export default Section;
