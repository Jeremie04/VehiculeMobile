import {
  IonAlert,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonTabButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useHistory, useParams } from "react-router";
import ExploreContainer from "../components/ListAnnonceComponent";
import "./Page.css";
import { logOut, notifications } from "ionicons/icons";
import ListAnnonceComponent from "../components/ListAnnonceComponent";
import { useState } from "react";

const Page: React.FC = () => {
  const history = useHistory();
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    console.log("item removed");

    history.push("/login");
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Vos Annonces</IonTitle>
          <div className="ion-text-end">
            <IonButton onClick={() => setShowLogoutAlert(true)}>
              <IonIcon icon={logOut} />
            </IonButton>
          </div>

          <IonAlert
            isOpen={showLogoutAlert}
            onDidDismiss={() => setShowLogoutAlert(false)}
            header={"Confirmation"}
            message={"Voulez-vous vraiment vous déconnecter ?"}
            buttons={[
              {
                text: "Annuler",
                role: "cancel",
                cssClass: "secondary",
              },
              {
                text: "Déconnexion",
                handler: () => handleLogout(),
              },
            ]}
          />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ListAnnonceComponent />
      </IonContent>
    </IonPage>
  );
};

export default Page;
