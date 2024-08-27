import "./App.css";
import { AppRoutes } from "./constants/routes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Dashboard, LoginPage, CreateUser } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoutes.HOME} element={<Dashboard />} />
        <Route path={AppRoutes.LOGIN} element={<LoginPage />} />
        <Route path={AppRoutes.REGISTER} element={<CreateUser />} />
        <Route
          path={AppRoutes.UNKNOWN}
          element={<Navigate to={AppRoutes.LOGIN} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
