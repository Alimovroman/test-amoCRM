import { useEffect, useState } from "react";
import style from "./Main.module.scss";

export const Main = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={style.root}>
      <div className={style.leftBlockWrapper}>
        <div className={style.leftBlockMainContent}>
          Зарабатывайте больше
          <span className={style.textGradientLeftBlock}>c WELBEX</span>
        </div>
        <div className={style.descriptionLeftBlock}>
          Развиваем и контролируем продажи за вас
        </div>
      </div>
      <div className={style.rightBlock}>
        <div className={style.header}>
          Вместе c{" "}
          <span className={style.textGradientRightBlock}>
            бесплатной консультацией{" "}
          </span>
          мы дарим:
        </div>

        <div className={style.rightBlockContent}>
          {windowWidth >= 415 ? (
            <>
              {" "}
              <div className={style.rightBlockItem}>
                Виджеты
                <div className={style.itemDescription}>30 готовых решений</div>
              </div>
              <div className={style.rightBlockItem}>
                Dashboard
                <div className={style.itemDescription}>
                  c показателями вашего бизнеса
                </div>
              </div>
              <div className={style.rightBlockItem}>
                Skype Аудит
                <div className={style.itemDescription}>
                  отдела продажи CRM системы
                </div>
              </div>
              <div className={style.rightBlockItem}>
                35 дней
                <div className={style.itemDescription}>использования CRM</div>
              </div>
            </>
          ) : (
            <>
              <div className={style.mobileRightBlockItem}>
                <div className={style.line} />
                Skype Аудит
              </div>
              <div className={style.mobileRightBlockItem}>
                <div className={style.line} />
                30 Виджетов
              </div>
              <div className={style.mobileRightBlockItem}>
                <div className={style.line} />
                Dashboard
              </div>
              <div className={style.mobileRightBlockItem}>
                <div className={style.line} />
                Месяц amocrm
              </div>
            </>
          )}
        </div>
        <div className={style.buttonWrapper}>
          <button className={style.button}>Получить консультацию</button>
        </div>
      </div>
    </div>
  );
};
