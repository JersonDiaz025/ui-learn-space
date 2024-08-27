import { useState } from "react";

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

        console.log(userData);
        setUserData({ email: "", password: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return { userData, handleSubmit, handleChange };
};

export default useLogin;
