import { useState } from "react";

const useRegister = () => {
  const [userDataRegister, setUserDataRegister] = useState({
    name: "",
    lastName: "",
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
        userDataRegister.lastName !== "" &&
        userDataRegister.phone !== "" &&
        userDataRegister.email !== "" &&
        userDataRegister.password !== ""
      ) {
        console.log(userDataRegister);
        // Call service
        setUserDataRegister({
          name: "",
          lastName: "",
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
