import { api, requestConfig } from "../utils/config";

// Rgeistrar um usuario
const registerUser = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/users/register", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res) {
      // Salva item no localStorage do navegador
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

// Deslogar usuario
const logoutUser = () => {
  localStorage.removeItem("user");
};

const loginUser = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/users/login", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res._id) {
      // Salva item no localStorage do navegador
      localStorage.setItem("user", JSON.stringify(res));
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

const authService = {
  registerUser,
  logoutUser,
  loginUser,
};

export default authService;
