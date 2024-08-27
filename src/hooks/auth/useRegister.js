import { useState } from "react";
import { connection } from "../../services/connection";

const useRegister = () => {
  const [userDataRegister, setUserDataRegister] = useState({
    name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const newData = { ...userDataRegister, [name]: value };
    setUserDataRegister(newData);
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      if (
        userDataRegister.name !== "" &&
        userDataRegister.last_name !== "" &&
        userDataRegister.phone !== "" &&
        userDataRegister.email !== "" &&
        userDataRegister.password !== ""
      ) {
       await connection("", userDataRegister, "post");
        // Call service
        setUserDataRegister({
          name: "",
          last_name: "",
          phone: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return {
    handleChange,
    handleRegister,
    userDataRegister,
  };
};

export default useRegister;
