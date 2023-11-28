import style from "./Menu.module.scss";

export const Menu = () => {
  return (
    <div className={style.root}>
      <div>
        <a href={"#"} className={style.menuItem}>
          Услуги
        </a>
      </div>
      <div>
        <a href={"#"} className={style.menuItem}>
          Виджеты
        </a>
      </div>
      <div>
        <a href={"#"} className={style.menuItem}>
          Интеграции
        </a>
      </div>
      <div>
        <a href={"#"} className={style.menuItem}>
          Кейсы
        </a>
      </div>
      <div>
        <a href={"#"} className={style.menuItem}>
          Сертификаты
        </a>
      </div>
    </div>
  );
};
