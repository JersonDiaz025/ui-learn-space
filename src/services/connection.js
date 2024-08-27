import axios from "axios";
import { USER_INFO_KEY } from "../constants/keyUser";

export const connection = async (
  end_poin = "",
  requestData = {},
  method = ""
) => {
  const url = end_poin.trim()
    ? `http://localhost:5000/${end_poin}`
    : "http://localhost:5000/";

  try {
    const userData = JSON.parse(localStorage.getItem(USER_INFO_KEY));
    const token = userData ? userData.token : null;

    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await axios({
      method: method.toUpperCase(),
      url: url,
      data: method.toUpperCase() === "GET" ? null : requestData,
      params: method.toUpperCase() === "GET" ? requestData : null,
      headers: headers,
    });

    return response.data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error.message);

    return null;
  }
};
