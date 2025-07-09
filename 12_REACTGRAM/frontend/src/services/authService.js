import { api, requestConfig } from "../utils/config";

// Rgeistrar um usuario
const registerUser = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/user/register", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res) {
      // Salva item no localStorage do navegador
      localStorage.setItem("user", JSON.stringify(res));
    }
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  registerUser,
};

export default authService;
