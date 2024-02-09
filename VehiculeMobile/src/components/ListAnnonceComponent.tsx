import { useHistory } from "react-router-dom";
import AnnonceService from "../services/AnnonceService";
import Annonce from "./Annonce";
import "./ExploreContainer.css";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonTitle,
  IonToolbar,
  IonHeader,
} from "@ionic/react";
import { useEffect, useState } from "react";

// const history = useHistory();
const token = sessionStorage.getItem("token");
// if (token == null) {
//   history.push("/login");
// }
const ExploreContainer: React.FC = () => {
  const [annonces, setAnnonces] = useState([]);
  const fetchData = async () => {
    try {
      const response = await AnnonceService.MesAnnonces(token);
      // console.log(response.data.data);
      setAnnonces(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // console.log("help God");
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div id="container mt-5">
      <IonGrid>
        <IonRow>
          <IonCol size="12" size-md="6" size-lg="4">
            {annonces.map((annonce, index) => (
              <Annonce key={index} annonce={annonce} />
            ))}
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default ExploreContainer;
