import logoImg from "../../../shared/assets/logo/logo_welbex.svg";
import style from "./Logo.module.scss";

export const Logo = () => {
  return (
    <div className={style.root}>
      <div>
        <img src={logoImg} alt="logo" />
      </div>
      <div className={style.description}>
        крупный интегратор CRM
        <br /> в Росcии и ещё 8 странах
      </div>
    </div>
  );
};
