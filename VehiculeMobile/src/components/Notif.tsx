import {
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

interface NotifProps {
  notif: any;
}

const Notif: React.FC<NotifProps> = ({ notif }) => {
  return (
    // <tr>
    //   <td>
    //     <div className="d-flex">
    //       <div>
    //         <div className="font-weight-bold mt-1">{notif.title}</div>
    //         <div>{notif.body}</div>
    //       </div>
    //     </div>
    //   </td>
    // </tr>

    <IonItem button={true} detail={false}>
      <div className="unread-indicator-wrapper" slot="start">
        <div className="unread-indicator"></div>
      </div>
      <IonLabel>
        <strong>Rick Astley</strong>
        <IonText>{notif.title}</IonText>
        <br />
        <IonNote color="medium" className="ion-text-wrap">
          {notif.body}
        </IonNote>
      </IonLabel>
      {/* <div className="metadata-end-wrapper" slot="end">
          <IonNote color="medium">06:11</IonNote>
          <IonIcon color="medium" icon={chevronForward}></IonIcon>
        </div> */}
    </IonItem>
  );
};

export default Notif;
