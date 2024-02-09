import React, { useState } from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonButton,
  IonAlert,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

import { Route, Redirect, useHistory } from "react-router";

import {
  playCircle,
  radio,
  library,
  search,
  notifications,
  listCircle,
  add,
  logOut,
} from "ionicons/icons";
import Login from "../pages/Login";
import CreationAnnonce from "../pages/CreationAnnonce";
import Kitage from "../pages/Kitage";
import Notification from "../pages/Notification";
import ListAnnonce from "../pages/ListAnnonce";
import Welcome from "../pages/Welcome";

function Tab() {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect exact path="/" to="/welcome" />
          {/*
                Use the render method to reduce the number of renders your component will have due to a route change.
      
                Use the component prop when your component depends on the RouterComponentProps passed in automatically.
              */}
          <Route path="/annonce" render={() => <ListAnnonce />} exact={true} />
          <Route path="/notif" exact={true} render={() => <Notification />} />
          <Route
            path="/creation"
            render={() => <CreationAnnonce />}
            exact={true}
          />
          <Route
            path="/creation/kitage/${id_annonce}"
            exact={true}
            render={() => <Kitage />}
          />
          <Route path="/login" exact={true} render={() => <Login />} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="radio" href="/creation">
            <IonIcon icon={add} />
            <IonLabel>Creer Annonce</IonLabel>
          </IonTabButton>

          <IonTabButton tab="library" href="/annonce">
            <IonIcon icon={listCircle} />
            <IonLabel>Vos Annonces</IonLabel>
          </IonTabButton>

          <IonTabButton tab="search" href="/notif">
            <IonIcon icon={notifications} />
            <IonLabel>Notifications</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
export default Tab;
