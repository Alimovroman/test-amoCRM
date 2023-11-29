import style from "./Menu.module.scss";

export const Menu = () => {
  const menuItems = ["Услуги", "Виджеты", "Интеграции", "Кейсы", "Сертификаты"];
  return (
    <div className={style.root}>
      {menuItems.map((e, i) => (
        <div
          key={i}
          className={i === menuItems.length - 1 ? style.menuLastItem : ""}
        >
          <a href={"#"} className={style.menuItem}>
            {e}
          </a>
        </div>
      ))}
    </div>
  );
};
