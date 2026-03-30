import { motion } from "framer-motion";

function Person({ name, roles, description, link = null }) {
  return (
    <motion.a href={link} target={link ? "_blank" : "_self"} whileHover={{ scale: 1.05, y: -3 }} className="person-card">
      <h2 className="person-name">{name}</h2>
      <p className="person-role">{roles.join(" • ")}</p>
      <p className="person-description">{description}</p>
    </motion.a>
  );
}

export default Person;
