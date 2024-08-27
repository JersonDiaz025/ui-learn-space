import { useState } from "react";
import { connection } from "../../services/connection";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../constants/routes";

const useLogin = () => {
  const navigation = useNavigate()
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
       const result =  await connection("login", userData, "post");
       const decoded = jwtDecode(result.data);
       const user = {id: decoded.id, name: decoded.name}
       localStorage.setItem("userData", JSON.stringify(user))
       if (decoded.id){
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
