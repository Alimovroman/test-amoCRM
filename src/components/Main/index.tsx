import style from "./Main.module.scss";

export const Main = () => {
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
        </div>
        <div className={style.buttonWrapper}>
          <button className={style.button}>Получить консультацию</button>
        </div>
      </div>
    </div>
  );
};
