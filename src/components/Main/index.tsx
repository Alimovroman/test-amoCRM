import style from "./Main.module.scss";

export const Main = () => {
  return (
    <div className={style.root}>
      <div className={style.leftBlock}>
        <div className={style.leftBlock}>
          Зарабатывайте больше <span>c WELBEX</span>
        </div>
        <div>Развиваем и контролируем продажи за вас</div>
      </div>
      <div className={style.rightBlock}>
        <div className={style.header}>
          Вместе c <span>бесплатной консультацией </span>мы дарим:
        </div>
        <div className={style.rightBlockContent}>
          <div className={style.rightBlockItem}>
            Виджеты{" "}
            <span className={style.itemDescription}>30 готовых решений</span>
          </div>
          <div className={style.rightBlockItem}>
            Dashboard{" "}
            <span className={style.itemDescription}>
              c показателями вашего бизнеса
            </span>
          </div>
          <div className={style.rightBlockItem}>
            Skype Аудит{" "}
            <span className={style.itemDescription}>
              отдела продажи CRM системы
            </span>
          </div>
          <div className={style.rightBlockItem}>
            35 дней{" "}
            <span className={style.itemDescription}>использования CRM</span>
          </div>
        </div>
        <div className={style.buttonWrapper}>
          <button className={style.button}>Получить консультацию</button>
        </div>
      </div>
    </div>
  );
};
