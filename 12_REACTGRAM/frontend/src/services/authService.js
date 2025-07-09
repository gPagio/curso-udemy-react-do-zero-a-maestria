import { api, requestConfig } from "../utils/config";

// Rgeistrar um usuario
const registerUser = async(data) => {

  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/user/register", config).then();
  } catch (error) {
    console.log(error);
  }

}