import style from "./style.module.scss";

function Main() {
  return (
    <div className={style.main}>
      <div className={style.contacts}>
        <p className={style.follow}>Follow us</p>
        <div className={style.imgInst}></div>
        <div className={style.imgTwit}></div>
      </div>
      <div className={style.info}>
        <div className={style.guide}>
          <hr className={style.hr} />
          <p className={style.paragraphGuide}>A Hiking guide</p>
        </div>
        <h2 className={style.mainInfo}>
          Be prepared for the Mountains and beyond!
        </h2>
        <div className={style.scroll}>
          <p className={style.scrollDown}>scrool down</p>
          <div className={style.scrollArrow}></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
