import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ApiUrl from "../api/ApiUrl";
import AuthentificationService from "../services/AuthentificationService";

const Login = () => {
  const [error, setError] = useState("");
  const [login, setEmail] = useState("rindra@gmail.com");
  const [motDePasse, setPass] = useState("pass");
  const history = useHistory();

  const onFormSubmit = async (event: any) => {
    event.preventDefault(); // Empêcher le comportement par défaut du formulaire
    try {
      const formData = JSON.stringify({ login, motDePasse });
      console.log(formData);
      AuthentificationService.login(formData);
      history.push("/home");
    } catch (error: any) {
      console.log("Une erreur s'est produite lors de l'envoi du formulaire.");
      if (error.response && error.response.data && error.response.data.error) {
        setError(error);
      }
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div className="ion-text-center">
          <IonCard className="ion-margin-top ion-padding">
            <IonCardHeader>
              <IonCardTitle className="ion-text-center">
                Connectez-vous !
              </IonCardTitle>
            </IonCardHeader>

            <form onSubmit={onFormSubmit}>
              <IonInput
                className="mt-3"
                label="Email"
                labelPlacement="floating"
                fill="outline"
                placeholder="Enter Email"
                value={"rindra@gmail.com"}
                onIonChange={(e) => setEmail(e.detail.value ?? "")}
              ></IonInput>
              <IonInput
                className="mt-3"
                label="Password"
                labelPlacement="floating"
                fill="outline"
                placeholder="Enter text"
                type="password"
                value="pass"
                onIonChange={(e) => setPass(e.detail.value ?? "")}
              ></IonInput>
              {error && (
                <div className="alert alert-danger mt-3" role="alert">
                  {error}
                </div>
              )}
              <Link to={"/inscription"}>S'inscrire</Link>
              <button
                // to={"home"}
                className="btn btn-primary container-fluid mt-3"
                // className="ion-margin-top"
                disabled={login == "" || motDePasse == "" ? true : false}
              >
                Se connecter
              </button>
            </form>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
