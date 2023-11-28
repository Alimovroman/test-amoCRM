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
        <div>
          <div>О компании</div>
          <div>
            <div>Партнёрская программа</div>
            <div>Вакансии</div>
          </div>
        </div>
        <div>
          <div>Меню</div>
          <div>
            {menuItems.map((e) => (
              <div>{e}</div>
            ))}
          </div>
        </div>
        <div>
          <Contacts />
          <div>Москва, Путевой проезд 3c1, к 902</div>
        </div>
      </div>
      <div className={style.copyright}>
        ©WELBEX 2022. Bce права защищены. Политика конфиденциальности
      </div>
    </div>
  );
};
