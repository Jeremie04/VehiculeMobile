import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import {
  getColorName,
  hexToRgb,
  getClosestColor,
} from "../assets/js/colorName";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../assets/css/bootstrap.min.css";
import AuthentificationService from "../services/AuthentificationService";
import SousModeleService from "../services/ElementService";
import AnnonceService from "../services/AnnonceService";

const CreationAnnonce = () => {
  const [error, setError] = useState("");
  const token = sessionStorage.getItem("token");
  const history = useHistory();
  //**TEST */
  const [formData, setFormData] = useState({
    utilisateur: {
      idUtilisateur: "UTI1",
    },
    sousModele: {
      idSousModele: "",
    },
    couleur: "",
    prix: 0,
    prixMinimum: 0,
    dateAnnonce: new Date().toISOString(),
    etat: 0,
  });
  const handlePrixChange = (e: any) => {
    const prixValue = parseInt(e.target.value, 10); // Convertir en entier avec base 10
    setFormData({ ...formData, prix: prixValue });
  };

  const handlePrixMinChange = (e: any) => {
    const prixValue = parseInt(e.target.value, 10);
    setFormData({ ...formData, prixMinimum: prixValue });
  };

  console.log("Initial formData:", formData);

  const handleSousModeleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("Selected value:", e.target.value);
    setFormData((prevData) => ({
      ...prevData,
      sousModeles: {
        ...prevData.sousModele,
        idSousModele: e.target.value,
      },
    }));
    console.log("Updated formData:", formData);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await AnnonceService.save(formData, token);
      console.log(response.data);
      history.push("creation/kitage/" + response.data.annonce.idAnnonce);
    } catch (error: any) {
      setError(error);
    }
  };
  //**TEST */

  const [color, setSelectedColor] = useState<string>("");
  const [images, setImages] = useState<string[]>([]);
  const [sousModeles, setSousModeles] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const response = await SousModeleService.getAllSousModele(token);
      setSousModeles(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!AuthentificationService.isAuthenticatedUser()) {
      //history.push("/login");
    }
    fetchData();
  }, []);

  const handleImageInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = event.target.files;

    if (files) {
      const newImages: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onloadend = () => {
          newImages.push(reader.result as string);

          // Si toutes les images ont été lues, mettez à jour le state
          if (i === files.length - 1) {
            setImages((prevImages) => [...prevImages, ...newImages]);
          }
        };

        reader.readAsDataURL(file);
      }
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);
    console.log(getColorName(newColor));
  };

  return (
    <IonPage>
      <IonContent className="ion-padding" fullscreen>
        <IonCard className="ion-margin-top ion-padding">
          <IonCardHeader>
            <h3 className="ion-text-center">Créez votre Annonce</h3>
          </IonCardHeader>

          <form onSubmit={handleSubmit} method="post">
            <IonList>
              <IonItem>
                <IonLabel>Couleur</IonLabel>
                <input
                  type="color"
                  id="colorPicker"
                  name="couleur"
                  onChange={(e) => {
                    formData.couleur = getColorName(e.target.value)!;
                    console.log(getColorName(e.target.value));
                    setFormData(formData);
                  }}
                />
              </IonItem>
            </IonList>
            <IonList>
              <IonLabel>Sous Modele</IonLabel>
              <IonItem>
                <select
                  name="idSousModele"
                  id=""
                  className="form-control"
                  onChange={(e) => {
                    formData.sousModele.idSousModele = e.target.value;
                    console.log("selected");
                    setFormData(formData);
                  }}
                >
                  <option value={""}>selectionner Sous modele</option>
                  {sousModeles.map((sousmodele, index) => (
                    <option key={index} value={sousmodele.idSousModele}>
                      {sousmodele.nomSous}
                    </option>
                  ))}
                </select>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                <IonItem>
                  <IonInput
                    label="Prix"
                    placeholder="Prix"
                    name="prix"
                    type="number"
                    onIonChange={handlePrixChange}
                  ></IonInput>
                </IonItem>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                <IonItem>
                  <IonInput
                    label="Prix Min"
                    placeholder="Prix Minimum"
                    type="number"
                    name="prixMinimum"
                    onIonChange={handlePrixMinChange}
                  ></IonInput>
                </IonItem>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                <input
                  className="form-control"
                  multiple
                  type="file"
                  accept="image/*"
                  onChange={handleImageInputChange}
                />

                <div
                  className="image-thumbnails"
                  style={{ display: "flex", flexWrap: "wrap" }}
                >
                  {images.map((image, index) => (
                    <IonAvatar aria-hidden="true" slot="start" key={index}>
                      <IonImg
                        src={image}
                        alt={`Image ${index}`}
                        className="thumbnail"
                        style={{ margin: "10px" }}
                      />
                    </IonAvatar>
                  ))}
                </div>
              </IonItem>
            </IonList>
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                {error}
              </div>
            )}
            {/* <IonButton expand="block" className="ion-margin-top">
              Valider
            </IonButton> */}
            <button
              // to={"creation/kitage"}
              className="ion-margin-top btn btn-primary container-fluid"
            >
              Suivant
            </button>
          </form>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default CreationAnnonce;
