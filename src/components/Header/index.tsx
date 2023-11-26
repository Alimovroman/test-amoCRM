import { Contacts } from "../../shared/ui/contacts/Contacts";
import style from "./Header.module.scss";
import { Logo } from "./Logo/Logo";

export const Header = () => {
  return (
    <div className={style.root}>
      <Logo />
      <div>Menu</div>
      <Contacts />
    </div>
  );
};
