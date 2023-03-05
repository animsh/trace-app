import axios from "axios";
import Constants from "./Constants";
import Cookies from "universal-cookie";

class ApiServices {
  static makeSignupCall = (state) => {
    axios
      .post("http://127.0.0.1:8000/api/users/signup", {
        name: state.name,
        email: state.email,
        phone: state.phone,
        password: state.password,
      })
      .then(function (response) {
        console.log(response);
        if (response.data) {
          let data = response.data;
          if (data.status === "success") {
            const cookies = new Cookies();
            cookies.set("access_token", data.token, { path: "/" });
            cookies.set("access_id", data.user_id, { path: "/" });
            cookies.set("access_key", data.key, { path: "/" });
            console.log(cookies.get("access_token"));
            console.log(cookies.get("access_id"));
            console.log(cookies.get("access_key"));
            Constants.CUSTOM_TOAST(true, "Signup Successfull");
            Constants.fetchCookiesAndValidate("/login", "/home");
          } else {
            Constants.CUSTOM_TOAST(false, "Signup Failed");
          }
        } else {
          Constants.CUSTOM_TOAST(false, "Signup Failed");
        }
      })
      .catch(function (error) {
        console.log(error);
        Constants.CUSTOM_TOAST(false, "Signup Failed");
      });
  };

  static makeLoginCall = (state) => {
    axios
      .post("http://127.0.0.1:8000/api/users/login", {
        email: state.email,
        password: state.password,
      })
      .then(function (response) {
        if (response.data) {
          console.log(response);
          let data = response.data;
          if (data.status === "success") {
            const cookies = new Cookies();
            cookies.set("access_token", data.data.token, { path: "/" });
            cookies.set("access_id", data.data.user_id, { path: "/" });
            cookies.set("access_key", data.data.key, { path: "/" });
            console.log(cookies.get("access_token"));
            console.log(cookies.get("access_id"));
            console.log(cookies.get("access_key"));
            Constants.CUSTOM_TOAST(true, "Login Successfull");
            Constants.fetchCookiesAndValidate("/login", "/home");
          } else {
            Constants.CUSTOM_TOAST(false, "Login Failed");
          }
        } else {
          Constants.CUSTOM_TOAST(false, "Login Failed");
        }
      })
      .catch(function (error) {
        console.log(error);
        Constants.CUSTOM_TOAST(false, "Login Failed");
      });
  };
}

export default ApiServices;
