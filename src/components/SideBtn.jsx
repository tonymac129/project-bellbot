import { motion } from "framer-motion";

function SideBtn({ img, onClick, title }) {
  return (
    <motion.img
      whileHover={{ rotate: 30, x: 4 }}
      whileTap={{ rotate: 15, x: 2 }}
      src={img}
      onClick={onClick}
      title={title}
      className="side-btn"
    />
  );
}

export default SideBtn;
