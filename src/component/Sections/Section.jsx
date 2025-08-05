import { motion } from "framer-motion";
import "./Section.css";
import ourWndg from "/src/assets/inviteImgB.webp";
import lotus from "/src/assets/ffff.webp";
import timeTable from "/src/assets/Time_table.png.webp";
import licationIMG from "/src/assets/Layer_3.png.webp";
import cakeIMG from "/src/assets/Layer_6.png.webp";
import patyIMG from "/src/assets/photo.png (1).webp";

const Section = () => {
  // Анимации
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

  const rotateIn = {
    hidden: { opacity: 0, rotate: -30 },
    visible: { opacity: 1, rotate: 0, transition: { duration: 0.8 } },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
      {/* Первая секция */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <motion.div className="section__title" variants={fadeInLeft}>
          <h2>ДОРОГИЕ НАШИ РОДНЫЕ И ДРУЗЬЯ!</h2>
        </motion.div>

        <motion.div className="section__text" variants={fadeInRight}>
          <motion.div className="blckTxt" variants={fadeInUp}>
            <p>
              13 августа 2025 года <br /> состоится долгожданное событие
            </p>
          </motion.div>

          <motion.div
            className="section__image"
            variants={scaleIn}
            whileHover={{ scale: 1.05 }}
          >
            <img src={ourWndg} alt="img" />
          </motion.div>

          <motion.div className="section__text-content" variants={fadeInUp}>
            <p className="pingTxt">
              В этот особый день мы приглашаем вас разделить с нами радость и
              счастье, когда Рамшед и Саида станут мужем и женой.
            </p>
            <br />
            <p className="pingTxt">
              С огромным удовольствием мы приглашаем вас разделить с нами этот
              праздник!
            </p>
          </motion.div>

          <motion.div className="lotusImg" variants={rotateIn}>
            <img src={lotus} alt="img" />
          </motion.div>

          <motion.div
            className="section__name"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
          >
            Рамшед & Саида
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Вторая секция (адрес) */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <motion.div className="section__midl" variants={fadeInLeft}>
          <p className="pingTxt">Ресторан "Яккасарой"</p>
          <p className="blckTxt">г. Душанбе, пр. Шерози 22/2</p>
        </motion.div>
      </motion.section>

      {/* Третья секция (расписание) */}
      <motion.section
        className="section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
      >
        <motion.div className="section_conteiner" variants={fadeInRight}>
          <motion.div className="section__TimeTable" variants={scaleIn}>
            <img src={timeTable} alt="Расписание" />
          </motion.div>

          <motion.div className="section__TimeTableIMG" variants={fadeInLeft}>
            <motion.div
              className="section__TimeTableImg"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img src={licationIMG} alt="Сбор гостей" />
              <span className="section__TimeTableText">
                <p>Сбор гостей</p>
              </span>
            </motion.div>

            <motion.div
              className="section__TimeTableImg"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img src={patyIMG} alt="Начало" />
              <span className="section__TimeTableText">
                <p>Начало мероприятия</p>
              </span>
            </motion.div>

            <motion.div
              className="section__TimeTableImg"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img src={cakeIMG} alt="Торт" />
              <span className="section__TimeTableText">
                <p>Торт</p>
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Section;
