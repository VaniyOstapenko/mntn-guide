import style from "./style.module.scss";

function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.firstParagraphs}>
          <p className={style.mntn}>MNTN</p>
          <p className={style.getOutThere}>
            Get out there & discover your next <br />
            slope, mountain & destination!
          </p>
          <p className={style.copyright}>
            Copyright 2023 MNTN, Inc. Terms & Privacy
          </p>
        </div>
        <div className={style.secondParagraphs}>
          <p className={style.moreOnTheBlog}>More on The Blog</p>
          <p>About MNTN</p>
          <p>Contributors & Writers</p>
          <p>Write For Us</p>
          <p>Contact Us</p>
          <p>Privacy Policy</p>
        </div>
        <div className={style.thirdParagraphs}>
          <p className={style.moreOnMNTN}>More on MNTN</p>
          <p>The Team</p>
          <p>Jobs</p>
          <p>Press</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
