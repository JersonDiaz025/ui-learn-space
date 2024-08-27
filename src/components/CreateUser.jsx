/* eslint-disable react/no-unknown-property */
import Title from "./Title";
import { Link } from "react-router-dom";
const CreateUser = () => {
  return (
    <div>
      <div class="form-container-register">
        <Title title="Registrarse" />
        <form class="form-register">
          <label>Nombre</label>
          <input type="text" class="input" placeholder="Escribe tu nombre" />
          <label>Apellidos</label>
          <input
            type="text"
            class="input"
            placeholder="Escribe tus apellidos"
          />
          <label>Teléfono</label>
          <input type="tel" class="input" placeholder="000-000-0000" />
          <label>Correo electrónico</label>
          <input
            type="text"
            class="input"
            placeholder="Escribe tu correo electrónico"
          />
          <label>Contraseña</label>
          <input type="password" class="input" placeholder="Contraseña" />
          <div className="container-action-register">
            <span className="span">
              Tienes una cuenta? <Link to="/login">Iniciar sesión</Link>
            </span>
          </div>
          <button>Registrarse</button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
