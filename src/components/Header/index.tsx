import { Contacts } from "../../shared/ui/contacts/Contacts";
import style from "./Header.module.scss";
import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";

export const Header = () => {
  return (
    <div className={style.root}>
      <div className={style.WrapperLogoMenu}>
        <Logo />
        <Menu />
      </div>
      <Contacts />
    </div>
  );
};
