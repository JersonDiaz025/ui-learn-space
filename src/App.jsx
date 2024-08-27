import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, LoginPage, CreateUser } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
