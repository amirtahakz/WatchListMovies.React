import Cookies from "universal-cookie";

export const CookiesManger = {
  SetUserCookie: async (accessToken, refreshToken, email, timeByMinute) => {
    const cookies = new Cookies();
    var date = new Date();
    date.setTime(date.getTime() + timeByMinute * 60 * 1000);

    cookies.set("accessToken", accessToken, { expires: date });
    cookies.set("refreshToken", refreshToken, { expires: date });
    cookies.set("email", email, { expires: date });
  },
  GetUserCookie: async () => {
    const cookies = new Cookies();
    const data = {
      email: cookies.get("email"),
    };
    return data;
  },
  RemoveUserCookie: async () => {
    const cookies = new Cookies();
    await cookies.remove("accessToken");
    await cookies.remove("refreshToken");
    await cookies.remove("email");
  },
  GetTokens: async () => {
    const cookies = new Cookies();
    const data = {
      token: cookies.get("accessToken"),
      refreshToken: cookies.get("refreshToken"),
    };
    return data;
  },
};
