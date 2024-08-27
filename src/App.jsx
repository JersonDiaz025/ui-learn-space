import "./index.css";
import { AppRoutes } from "./constants/routes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import { USER_INFO_KEY } from "./constants/keyUser";
import { Dashboard, LoginPage, CreateUser } from "./pages";
import Product from "./pages/Product";

function App() {
  const infoUser = JSON.parse(localStorage.getItem(USER_INFO_KEY));

  return (
    <Router>
      <div>
        {infoUser?.id && (
          <div style={{ position: "relative", width: "100%" }}>
            <Header infoUser={infoUser} />
          </div>
        )}
        <main className="body-main">
          <Routes>
            <Route path={AppRoutes.HOME} element={<Dashboard />} />
            <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
            <Route path={AppRoutes.ORDER_PRODUCT} element={<Product />} />

            <Route path={AppRoutes.REGISTER} element={<CreateUser />} />
            <Route
              path={AppRoutes.UNKNOWN}
              element={<Navigate to={AppRoutes.LOGIN} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
