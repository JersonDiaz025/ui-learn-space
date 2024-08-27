import { useState } from "react";
import { connection } from "../services/connection";

const useAddress = () => {
  const [address, setAddress] = useState({
    street: "",
    street_number: "",
    sector: "",
    city: "",
  });

  const handleChange = () => {
    const { name, value } = event.target;
    const newData = { ...address, [name]: value };
    setAddress(newData);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (
        address.street !== "" &&
        address.street_number !== "" &&
        address.sector !== "" &&
        address.city !== ""
      ) {
        // Call service
        await connection("address", address, "post");

        setAddress({ street: "", street_number: "", sector: "", city: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { address, handleChange, handleSubmit };
};

export default useAddress;
