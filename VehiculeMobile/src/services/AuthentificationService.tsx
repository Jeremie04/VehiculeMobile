import axios, { AxiosResponse } from "axios";
import ApiUrl from "../api/ApiUrl";

class AuthenticationService {
  isAuthenticated = false;

  async login(formData: any) {
    try {
      const response: AxiosResponse<any> = await axios.post(
        ApiUrl + "/initial/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      sessionStorage.setItem("token", response.data.response.token);
      console.log(response.data.response.token);

      this.isAuthenticated = true;
    } catch (error) {
      throw error;
    }
  }

  async register(formData: any) {
    try {
      const response: AxiosResponse<any> = await axios.post(
        ApiUrl + "/initial/inscription",
        formData
      );
      sessionStorage.setItem("token", response.data.response.token);
      console.log(response.data.response.token);
      this.isAuthenticated = true;
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      throw error;
    }
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}

export default new AuthenticationService();
