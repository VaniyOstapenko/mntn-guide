import style from "./style.module.scss";

function Header() {
  return (
    <div className={style.wrapper}>
      <div className={style.title}>
        <h1>MNTN</h1>
      </div>
      <div className={style.paragraph}>
        <p>Equipment</p>
        <p>About us</p>
        <p>Blog</p>
      </div>
    </div>
  );
}

export default Header;
