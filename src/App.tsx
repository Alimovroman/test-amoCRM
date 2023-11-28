import React from "react";
import style from "./App.module.scss";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";

function App() {
  return (
    <div className={style.root}>
      <Header />
      <Main />
      <Footer />
      <div className={style.backgroundBigBall} />
      <div className={style.backgroundMiddleBall} />
      <div className={style.backgroundVioletBall} />
      <div className={style.backgroundSmallBall} />
    </div>
  );
}

export default App;
