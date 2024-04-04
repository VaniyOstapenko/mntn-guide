import style from "./style.module.scss";

function Content() {
  return (
    <div className={style.content}>
      <div className={style.numberOne}>01</div>
      <div className={style.levelHiker}>
        <div className={style.contentGetStarted}>
          <hr className={style.hrContent} />
          <p className={style.paragraphContnet}>GEt Started</p>
        </div>
        <h1 className={style.textH1}>What level of hiker are you?</h1>
        <p className={style.textInfo}>
          Determining what level of hiker you are can be an important tool when
          planning future hikes. This hiking level guide will help you plan
          hikes according to different hike ratings set by various websites like
          All Trails and Modern Hiker. What type of hiker are you – novice,
          moderate, advanced moderate, expert, or expert backpacker?
        </p>
      </div>
      <div className={style.imgGetStarted}></div>
    </div>
  );
}

export default Content;
