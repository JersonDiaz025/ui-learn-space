import axios from "axios";

export const connection = async (
  end_poin = "",
  requestData = {},
  method = ""
) => {
  const url = end_poin.trim()
    ? `http://localhost:5000/${end_poin}`
    : "http://localhost:5000/";

  try {
    const response = await axios({
      method: method.toUpperCase(),
      url: url,
      data: method.toUpperCase() === "GET" ? null : requestData,
      params: method.toUpperCase() === "GET" ? requestData : null,
    });

    return response.data;
  } catch (error) {
    console.error("Error al realizar la solicitud:", error.message);

    return null;
  }
};
