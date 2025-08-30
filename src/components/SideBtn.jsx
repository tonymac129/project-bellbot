import { motion } from "framer-motion";

function SideBtn({ img, onClick, title }) {
  return (
    <motion.img
      whileHover={{ rotate: 20, y: -4 }}
      whileTap={{ rotate: 10, y: -2 }}
      src={img}
      onClick={onClick}
      title={title}
      className="side-btn"
    />
  );
}

export default SideBtn;
