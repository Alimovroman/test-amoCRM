import { Contacts } from "../../shared/ui/contacts/Contacts";
import style from "./Footer.module.scss";

export const Footer = () => {
  const menuItems: string[] = [
    "Расчёт стоимости",
    "Услуги",
    "Виджеты",
    "Интеграции",
    "Наши клиенты",
    "Кейсы",
    "Благодарственные письма",
    "Сертификаты",
    "Блог на Youtube",
    "Вопрос / Ответ",
  ];
  return (
    <div className={style.root}>
      <div className={style.footerWrapper}>
        <div className={style.menuBlock}>
          <div className={style.headerMenu}>O компании</div>
          <div className={style.menuItems}>
            <div className={style.menuItem}>Партнёрская программа</div>
            <div className={style.menuItem}>Вакансии</div>
          </div>
        </div>
        <div className={`${style.menuBlock} ${style.menuBlockSecond}`}>
          <div className={style.headerMenu}>Меню</div>
          <div className={style.menuItems}>
            {menuItems.map((e, i) => (
              <div key={i} className={style.menuItem}>
                {e}
              </div>
            ))}
          </div>
        </div>
        <div className={style.menuBlock}>
          <div className={`${style.headerMenu} ${style.headerMenuLast}`}>
            Контакты
          </div>
          <Contacts flexDirection="column" />
          <div>Москва, Путевой проезд 3c1, к 902</div>
        </div>
      </div>
      <div className={style.copyright}>
        ©WELBEX 2022. Bce права защищены. Политика конфиденциальности
      </div>
    </div>
  );
};
