import { motion } from "framer-motion";
import "./Header.css";
import logo from "/src/assets/test.webp";
import inviteImg from "/src/assets/invitation.webp";

const Header = () => {
  // Анимации для появления блоков
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <header className="header">
      <motion.div
        className="header__logo"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <img src={logo} alt="logo" />
        <div className="header__logo-text">
          <h2>Рамшед и Саида</h2>
        </div>
      </motion.div>

      <motion.div
        className="inviteBaner"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <motion.div className="btnTop" variants={fadeInLeft} />
        <img src={inviteImg} alt="invitation" />
        <motion.div className="btnBtm" variants={fadeInRight} />
      </motion.div>
    </header>
  );
};

export default Header;
