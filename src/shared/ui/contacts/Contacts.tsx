import { FC } from "react";
import telegramImage from "../../assets/contacts/telegram.svg";
import viberImage from "../../assets/contacts/viber.svg";
import whatsapImage from "../../assets/contacts/whatsapp.svg";
import style from "./Contacts.module.scss";

type Props = {
  flexDirection?: "column";
};

export const Contacts: FC<Props> = ({ flexDirection }) => {
  return (
    <div className={flexDirection ? style.rootColumn : style.root}>
      <div>+7 555 555-55-55</div>
      <div className={style.messengers}>
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
