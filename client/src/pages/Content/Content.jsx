import style from "./style.module.scss";

function Content() {
  return (
    <>
      <div className={style.content}>
        <div className={style.numberOne}>01</div>
        <div className={style.levelHiker}>
          <div className={style.contentGetStarted}>
            <hr className={style.hrContent} />
            <p className={style.paragraphContnet}>GEt Started</p>
          </div>
          <h1 className={style.textH1}>What level of hiker are you?</h1>
          <p className={style.textInfo}>
            Determining what level of hiker you are can be an important tool
            when planning future hikes. This hiking level guide will help you
            plan hikes according to different hike ratings set by various
            websites like All Trails and Modern Hiker. What type of hiker are
            you – novice, moderate, advanced moderate, expert, or expert
            backpacker?
          </p>
        </div>
        <div className={style.imgGetStarted}></div>
      </div>

      <div className={style.content2}>
        <div className={style.imgHigingEssentials}></div>
        <div className={style.numberTwo}>02</div>
        <div className={style.hikingGear}>
          <div className={style.contentHikingEssentials}>
            <hr className={style.hrContent2} />
            <p className={style.paragraphContnet2}>Hiking Essentials</p>
          </div>
          <h1 className={style.textH1}>Picking the right Hiking Gear!</h1>
          <p className={style.textInfo}>
            The nice thing about beginning hiking is that you don’t really need
            any special gear, you can probably get away with things you already
            have. Let’s start with clothing. A typical mistake hiking beginners
            make is wearing jeans and regular clothes, which will get heavy and
            chafe wif they get sweaty or wet.
          </p>
        </div>
      </div>

      <div className={style.content3}>
        <div className={style.numberThree}>03</div>
        <div className={style.key}>
          <div className={style.contentKey}>
            <hr className={style.hrContent3} />
            <p className={style.paragraphContnet3}>where you go is the key</p>
          </div>
          <h1 className={style.textH1}>Understand Your Map & Timing</h1>
          <p className={style.textInfo}>
            To start, print out the hiking guide and map. If it’s raining, throw
            them in a Zip-Lock bag. Read over the guide, study the map, and have
            a good idea of what to expect. I like to know what my next landmark
            is as I hike. For example, I’ll read the guide and know that say, in
            a mile, I make a right turn at the junction..
          </p>
        </div>
        <div className={style.imgKey}></div>
      </div>
    </>
  );
}

export default Content;
