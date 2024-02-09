import axios from "axios";
import { useHistory } from "react-router-dom";
import ApiUrl from "../api/ApiUrl";

const SousModeleService = {
  getAllSousModele: async (token: any) => {
    return await axios.get(ApiUrl + "/annonce/sousModeles", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
  getAllTypeCarburant: async (token: any) => {
    return await axios.get(ApiUrl + "/typecarburants", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
};

export default SousModeleService;
