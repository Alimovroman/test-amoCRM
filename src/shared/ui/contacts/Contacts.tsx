import telegramImage from "../../assets/contacts/telegram.svg";
import viberImage from "../../assets/contacts/telegram.svg";
import whatsapImage from "../../assets/contacts/whatsapp.svg";
import style from "./Contacts.module.scss";

export const Contacts = () => {
  return (
    <div className={style.root}>
      <div>+7 555 555-55-55</div>
      <div className={style.messenger}>
        <div>
          <img src={telegramImage} alt="tg" />
        </div>
        <div>
          <img src={viberImage} alt="viber" />
        </div>
        <div>
          <img src={whatsapImage} alt="whatsap" />
        </div>
      </div>
    </div>
  );
};
