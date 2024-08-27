import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constants/routes";
import { connection } from "../../services/connection";
import { USER_INFO_KEY } from "../../constants/keyUser";

const useLogin = () => {
  const navigation = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...userData, [name]: value };
    setUserData(newData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (userData.email !== "" && userData.password !== "") {
        // Call service
        const result = await connection("login", userData, "post");
        const decoded = jwtDecode(result.data);
        const user = { id: decoded.id, name: decoded.name };
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(user));
        if (decoded.id) {
          navigation(AppRoutes.HOME);
        }
        setUserData({ email: "", password: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { userData, handleSubmit, handleChange };
};

export default useLogin;
