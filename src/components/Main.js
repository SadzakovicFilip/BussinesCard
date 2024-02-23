import style from "../style.module.css";
export default function Main() {
  return (
    <div className={style.main}>
      <div className={style.About}>
        <h1>O Meni</h1>
        <p>
          Ja sam Nikola, rodjen sam 1996.godine u Srbiji gde i dalje zivim.
          Zavrsio sam Gimnaziju u Cupriji 2015.godine, Fakultet 2024.godine.
          Trenutno sam zaposlen u Osnovnom sudu u Paracinu.
        </p>
      </div>
      <div className={style.Interest}>
        <h1>Interesovanja</h1>
        <p>
          U slobodno vreme se bavim profesionalno kosarkom i igram za KK
          Cuprija, iz Cuprije. Volim da igram tenis, stoni tenis, da skijam kao
          i da vozim biciklu u prirodi.
        </p>
      </div>

      <h5>
        Za sve dodatne informacije kontaktirajte me putem neke od punidjenih
        opcija na ovom web-site.
      </h5>
    </div>
  );
}
