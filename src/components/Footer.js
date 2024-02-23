import style from "../style.module.css";
import ig from "../Images/igBlack1.png";
import fb from "../Images/fbBlack4.png";
import x from "../Images/Ximg.webp";
export default function Footer() {
  return (
    <div className={style.footer}>
      <a href="https://www.instagram.com/makariev_nikola/" target="_">
        <img src={ig} width="40px"></img>
      </a>
      <a href="https://www.facebook.com/nikola.makariev" target="_">
        <img src={fb} width="40px"></img>
      </a>
      <a href="https://twitter.com/nistaanovo" target="_">
        <img src={x} width="40px"></img>
      </a>
    </div>
  );
}
