/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import useLogout from "../hooks/auth/useLogout";
import { AppRoutes } from "../constants/routes";
// eslint-disable-next-line react/prop-types
const Header = ({ infoUser }) => {
  const { handlelogOut } = useLogout();
  return (
    <div className="header">
      <p
        style={{
          color: "blue",
          fontSize: "20px",
          fontFamily: "cursive",
          fontWeight: "700",
        }}
      >
        Hola, <span>{infoUser?.name}</span>
      </p>
      <Link to={AppRoutes.ORDER_PRODUCT}>Ordenar producto</Link>
      <div>
        <button className="logout" onClick={handlelogOut}>
          <span className="transition"></span>
          <span className="gradient"></span>
          <span className="label">Cerrar sesión</span>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
