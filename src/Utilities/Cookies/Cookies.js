import Cookies from "universal-cookie";


export const CookiesManger = {
  SetUserCookie: async (accessToken, refreshToken , email , timeByMinute) => {
    const cookies = new Cookies();
    var date = new Date();
    date.setTime(date.getTime() + (timeByMinute * 60 * 1000));

    cookies.set("accessToken", accessToken , {expires : date} );
    cookies.set("refreshToken", refreshToken , {expires : date});
    cookies.set("email", email , {expires : date});
  },
  GetUserCookie: async () => {
    const cookies = new Cookies();
    const data = {
      email: cookies.get("email"),
    };
    return data;
  },
  IsUserLoggedIn: async () => {
    const cookies = new Cookies();
    const data = {
      accessToken: cookies.get("accessToken"),
      refreshToken: cookies.get("refreshToken"),
      email: cookies.get("email"),
    };
    if(data.accessToken !== undefined ||data.refreshToken !== undefined ||data.email !== undefined){
      return true;
    }
    return false;
  },
};
