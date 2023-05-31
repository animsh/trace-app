import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "universal-cookie";

class Constants {
  static get API_URL() {
    return "http://{YOUR_IP_ADDRESS}";
  }

  static sleep(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }

  static fetchCookiesAndValidate(currentpath, path) {
    const cookies = new Cookies();
    let access_token = cookies.get("access_token");
    if (access_token) {
      if (currentpath == path) {
        return;
      } else {
        window.location.href = path;
      }
    } else {
      if (currentpath == "/login" || currentpath == "/signup") {
        return;
      } else {
        window.location.href = "/login";
      }
    }
  }

  static CUSTOM_TOAST(isSuccess, message) {
    if (isSuccess) {
      toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }
}

export default Constants;
