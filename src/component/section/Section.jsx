import './Section.css'
import ourWndg from '/src/assets/inviteImgB.webp'
import lotus from '/src/assets/ffff.webp'
import timeTable from '/src/assets/Time_table.png.webp'
import licationIMG from '/src/assets/Layer_3.png.webp'
import cakeIMG from "/src/assets/Layer_6.png.webp"
import patyIMG from '/src/assets/photo.png (1).webp'


const section = () => {
    return (
      <>
        <section className="section">
          <div className="section__title">
            <h2>ДОРОГИЕ НАШИ РОДНЫЕ И ДРУЗЬЯ!</h2>
          </div>
          <div className="section__text">
            <div className="blckTxt">
              <p>
                13 августа 2025 года <br /> состоится долгожданное событие
              </p>
            </div>
            <div className="section__image">
              <img src={ourWndg} alt="img" />
            </div>
            <div className="section__text-content">
              <p className="pingTxt">
                В этот особый день мы приглашаем вас разделить с нами радость и
                счастье, когда Рамшед и Саида станут мужем и женой.
              </p>
              <br />
              <p className="pingTxt">
                С огромным удовольствием мы приглашаем вас разделить с нами этот
                праздник!
              </p>
            </div>
            <div className="lotusImg">
              <img src={lotus} alt="img" />
            </div>
            <div className="section__name">Рамшед & Саида</div>
          </div>
        </section>

        <section className="section">
          <div className="section__midl">
            <p className="pingTxt">Ресторан "Яккасарой"</p>
            <p className="blckTxt">г. Душанбе,пр. Шерози 22/2</p>
          </div>
        </section>

        <section className="section">
          <div className="section_conteiner">
            <div className="section__TimeTable">
              <img src={timeTable} alt="" />
            </div>

            <div className="section__TimeTableIMG">
              <div className="section__TimeTableImg">
                <img src={licationIMG} alt="" />
                <span className="section__TimeTableText">
                  <p>Сбор <br /> гостей</p>
                </span>
              </div>

              <div className="section__TimeTableImg">
                <img src={patyIMG} alt="" />
                <span className="section__TimeTableText">
                  <p>Начало мероприятия</p>
                </span>
              </div>

              <div className="section__TimeTableImg">
                <img src={cakeIMG} alt="" />
                <span className="section__TimeTableText">
                  <p>Торт</p>
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default section;