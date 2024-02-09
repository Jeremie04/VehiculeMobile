import { IonContent, IonPage } from "@ionic/react";
import React from "react";
import img from "../assets/img/voiture.png";

const Welcome = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "300px",
            backgroundImage: `url(${img})`, // Utilisez des backticks pour l'interpolation
            backgroundSize: "cover", // Ajustez selon vos besoins
            backgroundPosition: "center", // Ajustez selon vos besoins
          }}
        ></div>
        <h2 className="text-center">Welcome !</h2>
      </IonContent>
    </IonPage>
  );
};

export default Welcome;
