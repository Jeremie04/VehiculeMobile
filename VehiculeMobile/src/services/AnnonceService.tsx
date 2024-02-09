import axios from "axios";
import { useHistory } from "react-router-dom";
import ApiUrl from "../api/ApiUrl";

const AnnonceService = {
  save: async (formdata: any, token: any) => {
    return axios.post(ApiUrl + "/annonce/annonce", formdata, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
  MesAnnonces: async (token: any) => {
    return axios.get(ApiUrl + "/annonce/mesAnnonce", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
  vendu: async (idAnnonce: string, token: any) => {
    return axios.put(ApiUrl + "/annonce/annonceVendu/" + idAnnonce, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  },
};

export default AnnonceService;
