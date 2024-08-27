import { useState } from "react";
import { connection } from "../../services/connection";
import { jwtDecode } from "jwt-decode";

const useLogin = () => {
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
        setUserData({ email: "", password: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { userData, handleSubmit, handleChange };
};

export default useLogin;
