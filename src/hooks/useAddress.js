import { useState } from "react";
import { toast } from "react-toastify";
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
        const result = await connection("newAddress", address, "post");
        toast.success(result?.message);
        console.log(result);
        setAddress({ street: "", street_number: "", sector: "", city: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };
  return { address, handleChange, handleSubmit };
};

export default useAddress;
