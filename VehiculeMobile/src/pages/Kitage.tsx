import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonToast,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ElementService from "../services/ElementService";

const Kitage = () => {
  const [typecarburants, settypecarburants] = useState<any[]>([]);
  const token = sessionStorage.getItem("token");
  const fetchData = async () => {
    try {
      const response = await ElementService.getAllTypeCarburant(token);
      settypecarburants(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (token == null) {
      //history.push("/login");
    }
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonContent className="ion-padding" full-screen>
        <IonCard className="ion-margin-top ion-padding">
          <IonCardHeader>
            <h3 className="ion-text-center">Kitage Voiture</h3>
          </IonCardHeader>

          <form action="" method="post">
            <IonList>
              <IonItem>
                <IonItem>
                  <IonInput
                    name="batterie"
                    placeholder="Batterie"
                    type="number"
                  ></IonInput>
                </IonItem>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                <IonItem>
                  <IonInput
                    name="PuissanceMoteur"
                    placeholder="Puissance Moteur"
                    type="number"
                  ></IonInput>
                </IonItem>
              </IonItem>
            </IonList>
            <IonList>
              <IonItem>
                <IonSelect
                  placeholder="Type Carburant"
                  name="id_type_carburant"
                >
                  {typecarburants.map((typecarburant, index) => (
                    <IonSelectOption key={index} value={typecarburant.id}>
                      {typecarburant.nomTypeCarburant}
                    </IonSelectOption>
                  ))}
                </IonSelect>
              </IonItem>
            </IonList>
            <Link
              id="open-toast"
              to={"../creation"}
              className="btn btn-primary container-fluid"
            >
              Valider
            </Link>
            <Link
              to={"../creation"}
              className="ion-margin-top btn btn-info container-fluid"
            >
              Retour
            </Link>

            <IonToast
              trigger="open-toast"
              message="Votre annonce à été créée"
              duration={3000}
            ></IonToast>
          </form>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Kitage;
