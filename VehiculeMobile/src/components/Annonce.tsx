import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";
import { IonIcon } from "@ionic/react";
import { checkmark, cash } from "ionicons/icons";
import "../assets/css/general.css";
import img from "../assets/img/voiture rouge.jpg";
import "../assets/css/bootstrap.min.css";
import AnnonceService from "../services/AnnonceService";

interface AnnonceProps {
  annonce: any;
}

const Annonce: React.FC<AnnonceProps> = ({ annonce }) => {
  const token = sessionStorage.getItem("token");
  function vendu(idAnnonce: string) {
    const reponse = AnnonceService.vendu(idAnnonce, token);
  }

  return (
    <IonCard>
      <img alt="Silhouette of mountains" src={img} />
      <IonCardHeader>
        <div>
          <IonCardTitle>{annonce.nomsous}</IonCardTitle>
          <IonCardSubtitle>{annonce.DateAnnonce}</IonCardSubtitle>
        </div>
      </IonCardHeader>

      <IonCardContent
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <ul>
          <li>
            <p>
              <strong>Couleur :</strong> {annonce.couleur}
            </p>
          </li>
          <li>
            <p>
              <strong>Prix :</strong> {annonce.prix}
            </p>
          </li>
          <li>
            <p>
              <strong>Date Annonce :</strong> {annonce.dateAnnonce}
            </p>
          </li>
        </ul>

        {annonce.etat == 3 ? (
          <button
            type="button"
            className="btn btn-primary btn-icon-text"
            onClick={() => {
              vendu(annonce.idAnnonce);

              window.location.reload();
            }}
          >
            <IonIcon icon={cash} />
            Vendu
          </button>
        ) : (
          <p style={{ color: "green" }}>
            <IonIcon icon={checkmark} /> Vendu
          </p>
        )}
      </IonCardContent>
    </IonCard>
  );
};
export default Annonce;
