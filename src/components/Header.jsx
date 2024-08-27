/* eslint-disable react/prop-types */
import { useLogout } from "../hooks/auth/useLogout";
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
      <div>
        <button className="logout" onClick={handlelogOut}>
          <span className="transition"></span>
          <span className="gradient" onClick={handlelogOut}></span>
          <span className="label" onClick={handlelogOut}>
            Cerrar sesión
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
