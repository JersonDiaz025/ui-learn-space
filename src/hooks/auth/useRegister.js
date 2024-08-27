import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { connection } from "../../services/connection";
import { AppRoutes } from "../../constants/routes";

const useRegister = () => {
  const navigation = useNavigate();
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
        const result = await connection("", userDataRegister, "post");
        toast.success(result?.message);
        if (result) {
          navigation(AppRoutes.LOGIN);
        }
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
