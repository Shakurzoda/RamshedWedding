import { motion } from "framer-motion";
import "./Footer.css";

const Footer = () => {
  // Анимация текста
  const textAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // Анимация фона
  const bgAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={bgAnimation}
    >
      <motion.h1 variants={textAnimation} whileHover={{ scale: 1.05 }}>
        Мы будем рады <br /> видеть вас!
      </motion.h1>
    </motion.div>
  );
};

export default Footer;
