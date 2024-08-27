/* eslint-disable react/no-unknown-property */
import Title from "./Title";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div class="form-container">
        <Title title="Iniciar sesión" />
        <form class="form">
          <label>Email</label>
          <input type="text" class="input" placeholder="Enter yout email" />
          <label>Password</label>
          <input type="password" class="input" placeholder="Password" />
          <div className="container-action">
            <span className="span">
              No tienes una cuenta? <Link to="/register">Registrarse</Link>
            </span>
          </div>
          <button>Ingresar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
