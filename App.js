import TelaPrincipal from './Fonte/Telas/TelaPrincipal';
import TelaSelecaoVideo from './Fonte/Telas/TelaSelecaoVideo';
import TelaReprodutor from './Fonte/Telas/TelaReprodutor';
import TelaCarregando from './Fonte/Telas/TelaCarregando';
import TelaAutenticacao from './Fonte/Telas/TelaAutenticacao';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import MenuGaveta from './Fonte/Componentes/MenuGaveta';
import React, { Component } from "react";

const NavigatorAplicacao = createStackNavigator({ NavPrincipal: TelaPrincipal, NavSelecaoVideo:TelaSelecaoVideo, NavReprodutor:TelaReprodutor});

const NavigatorTelaPrincipal = createDrawerNavigator(
  {
    NavPrincipal: NavigatorAplicacao 
  },{
    contentComponent: props => <MenuGaveta {...props} />
  }
);

export default createAppContainer( createSwitchNavigator(
  {
    NavCarregando   : TelaCarregando,
    NavAutenticacao : TelaAutenticacao,
    NavAplicacao    : NavigatorTelaPrincipal,
  },
  {
    initialRouteName: 'NavCarregando'
  }
));