import Picture from "../Images/NikolaMakariev.jpeg";
import style from "../style.module.css";
import email from "../Images/e-mail.png";
import phone from "../Images/phone5.png";
export default function Header() {
  return (
    <div className={style.Header}>
      <div className={style.image}>
        <img src={Picture} className={style.picture}></img>
      </div>
      <div className={style.info}>
        <h1>Nikola Makariev</h1>
        <h3>Strukovni Inzenjer Elektrotehnike i Racunarstva</h3>
      </div>
      <div className={style.buttons}>
        <button className={style.emailbutton}>
          <a href="mailto:makarievn@gmail.com">
            <img src={email} height="95px" />
          </a>
        </button>
        <button className={style.phonebutton}>
          <a href="tel:+381604564481">
            <img src={phone} height="95px" />
          </a>
        </button>
      </div>
    </div>
  );
}
