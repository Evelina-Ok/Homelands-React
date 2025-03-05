import style from "./Footer.module.scss";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { GridContainer } from "../GridContainer/GridContainer";

export function Footer() {
  return (
    <footer className={style.footer}>
      <GridContainer column={2}>
        <GridContainer column={3} gap={1}>
          <h2>HomeLands</h2>
          <ul>
            <li>Øster Uttrupvej 5</li>
            <li>9000 Aalborg</li>
          </ul>
          <ul>
            <li>Emal: info@homelands.dk</li>
            <li>Telefon: +45 1122 3344</li>
          </ul>
        </GridContainer>
        <div>
          <FaTwitterSquare />
          <FaSquareFacebook />
        </div>
      </GridContainer>
    </footer>
  );
}
