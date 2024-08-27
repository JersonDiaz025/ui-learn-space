/* eslint-disable react/no-unknown-property */
import { AppRoutes } from "../constants/routes";
import useLogin from "../hooks/auth/useLogin";
import Title from "./Title";
import { Link } from "react-router-dom";

const Login = () => {
  const { userData, handleSubmit, handleChange } = useLogin();
  return (
    <div>
      <div className="form-container">
        <Title title="Iniciar sesión" />
        <form className="form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="text"
            name="email"
            required
            className="input"
            value={userData.email}
            onChange={(ev) => handleChange(ev)}
            placeholder="Correo electrónico"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            required
            className="input"
            value={userData.password}
            onChange={(ev) => handleChange(ev)}
            placeholder="Contraseña"
          />
          <div className="container-action">
            <span className="span">
              No tienes una cuenta?{" "}
              <Link to={AppRoutes.REGISTER}>Registrarse</Link>
            </span>
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
