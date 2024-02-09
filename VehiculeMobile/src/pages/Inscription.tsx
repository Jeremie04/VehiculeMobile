import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import AuthentificationService from "../services/AuthentificationService";
import "../assets/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";

const Inscription = () => {
  const [error, setError] = useState("");
  const history = useHistory();
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    sexe: "1",
    login: "",
    role: "user",
    motDePasse: "",
    adresse: "",
  });
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();
    console.log(JSON.stringify(formData));
    try {
      AuthentificationService.register(formData);
      history.push("/home");
    } catch (error: any) {
      setError(error);
    }
  };
  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <div className="ion-text-center ion-align-items-center">
          <IonCard className="ion-margin-top ion-padding">
            <IonCardHeader>
              <IonCardTitle className="ion-text-center">
                Inscrivez-vous !
              </IonCardTitle>
            </IonCardHeader>

            <form onSubmit={handleFormSubmit} method="post">
              <IonInput
                type="text"
                fill="solid"
                label="Nom"
                labelPlacement="floating"
                name="nom"
                className="form-control"
                onIonChange={handleInputChange}
              ></IonInput>
              <IonInput
                type="text"
                fill="solid"
                label="Prenom"
                labelPlacement="floating"
                name="prenom"
                onIonChange={handleInputChange}
              ></IonInput>
              <IonInput
                type="date"
                fill="solid"
                label="Date Naissance"
                name="dateNaissance"
                onIonChange={handleInputChange}
              ></IonInput>
              <IonList>
                <IonItem>
                  <IonSelect
                    placeholder="Sexe"
                    name="sexe"
                    onIonChange={handleInputChange}
                  >
                    <IonSelectOption value={1}>Homme</IonSelectOption>
                    <IonSelectOption value={2}>Femme</IonSelectOption>
                  </IonSelect>
                </IonItem>
              </IonList>
              <IonInput
                type="email"
                fill="solid"
                label="Email"
                name="login"
                labelPlacement="floating"
                onIonChange={handleInputChange}
              ></IonInput>
              <IonInput
                type="password"
                fill="solid"
                label="motDePasse"
                name="motDePasse"
                labelPlacement="floating"
                onIonChange={handleInputChange}
              ></IonInput>
              <IonInput
                type="text"
                fill="solid"
                label="Adresse"
                name="adresse"
                labelPlacement="floating"
                onIonChange={handleInputChange}
              ></IonInput>
              {error && (
                <div className="alert alert-danger mt-3" role="alert">
                  {error}
                </div>
              )}
              <button className="btn btn-primary container-fluid mt-5">
                S' Inscrire
              </button>
              {/* <Link to="/home" className="btn btn-primary container-fluid mt-5">
                S' Inscrire
              </Link> */}
              <Link to="/login" className="btn btn-info container-fluid mt-3">
                Retour
              </Link>
            </form>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inscription;
