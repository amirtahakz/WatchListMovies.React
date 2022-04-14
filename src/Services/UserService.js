import axios from "axios";
import { CookiesManger } from "../Utilities/Cookies/Cookies";

export const UserService = {
  SignInUser: async (user) => {
    return await axios
      .post("https://localhost:44332/api/v1/Account/Register", user)
      .catch((error) => console.log(error));
  },
  LoginUser: async (user) => {
    return await axios
      .post("https://localhost:44332/api/v1/Account/Login", user)
      .catch((error) => console.log(error));
  },
  GetAccessTokenByRefreshToken: async () => {
    return await axios
      .post("https://localhost:44332/api/v1/Account/RefreshToken", {refreshToken : CookiesManger.})
      .catch((error) => console.log(error));
  },
};
