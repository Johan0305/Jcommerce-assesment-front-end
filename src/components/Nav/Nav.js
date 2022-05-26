import { Link } from "react-router-dom";
import raccoonLogo from "../../assets/Icon/Raccoons.png";
import ButtonNav from "./ButtonNav";
const Nav = () => {
  return (
    <div className="barNav">
      <img
        alt="racoons-logo"
        src={raccoonLogo}
        height="60"
        width="68.719"
        className="raccoonImg"
      />
      <Link to="/">
        <ButtonNav text={"Home"} />
      </Link>
      <Link to="/products">
        <ButtonNav text={"Products"} />
      </Link>
      <input
        type="search"
        className="inputSearchNav"
        placeholder="Busca tu producto aquí"
      ></input>
      <Link to="/about">
        <ButtonNav text={"About"} />
      </Link>
    </div>
  );
};

export default Nav;
