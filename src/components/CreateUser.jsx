/* eslint-disable react/no-unknown-property */
import { AppRoutes } from "../constants/routes";
import useRegister from "../hooks/auth/useRegister";
import Title from "./Title";
import { Link } from "react-router-dom";
const CreateUser = () => {
  const { userDataRegister, handleRegister, handleChange } = useRegister();
  return (
    <div>
      <div className="form-container-register">
        <Title title="Registrarse" />
        <form className="form-register" onSubmit={handleRegister}>
          <label>Nombre</label>
          <input
            name="name"
            required
            value={userDataRegister.name}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Escribe tu nombre"
          />
          <label>Apellidos</label>
          <input
            name="last_name"
            value={userDataRegister.last_name}
            onChange={handleChange}
            required
            type="text"
            className="input"
            placeholder="Escribe tus apellidos"
          />
          <label>Teléfono</label>
          <input
            name="phone"
            type="tel"
            required
            value={userDataRegister.phone}
            onChange={handleChange}
            className="input"
            placeholder="000-000-0000"
          />
          <label>Correo electrónico</label>
          <input
            name="email"
            required
            value={userDataRegister.email}
            onChange={handleChange}
            type="text"
            className="input"
            placeholder="Escribe tu correo electrónico"
          />
          <label>Contraseña</label>
          <input
            name="password"
            required
            value={userDataRegister.password}
            onChange={handleChange}
            type="password"
            className="input"
            placeholder="Contraseña"
          />
          <div className="container-action-register">
            <span className="span">
              Tienes una cuenta?{" "}
              <Link to={AppRoutes.LOGIN}>Iniciar sesión</Link>
            </span>
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
