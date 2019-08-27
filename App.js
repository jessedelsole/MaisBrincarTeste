import TelaPrincipal from './Fonte/Telas/TelaPrincipal';
import TelaSelecaoCurso from './Fonte/Telas/TelaSelecaoCurso';
import TelaReprodutor from './Fonte/Telas/TelaReprodutor';
import TelaCarregando from './Fonte/Telas/TelaCarregando';
import TelaAutenticacao from './Fonte/Telas/TelaAutenticacao';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import MenuGaveta from './Fonte/Componentes/MenuGaveta';
import React, { Component } from "react";
import TelaListagemAudios from './Fonte/Telas/TelaListagemAudios';
import TelaListagemAulas from './Fonte/Telas/TelaListagemAulas';
import TelaListagemPdfs from './Fonte/Telas/TelaListagemPdfs';
import TelaListagemReferencias from './Fonte/Telas/TelaListagemReferencias';
import TelaAutenticacaoEmail from './Fonte/Telas/TelaAutenticacaoEmail';
import TelaEsqueceuSenha from './Fonte/Telas/TelaEsqueceuSenha';
import TelaCadastroEmail from './Fonte/Telas/TelaCadastroEmail';

const NavigatorAplicacao = createStackNavigator({ NavPrincipal: TelaPrincipal, NavSelecaoCurso:TelaSelecaoCurso, 
  NavReprodutor:TelaReprodutor, NavListagemAudios : TelaListagemAudios, NavListagemAulas: TelaListagemAulas,
 NavListagemPdfs : TelaListagemPdfs, NavListagemReferencias: TelaListagemReferencias});

 const NavigatorAutenticacao = createStackNavigator({ NavAutenticacao:TelaAutenticacao, NavAutenticacaoEmail:TelaAutenticacaoEmail,
 NavEsqueceuSenha:TelaEsqueceuSenha, NavCadastroEmail:TelaCadastroEmail});

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
    NavAutenticacao : NavigatorAutenticacao,
    NavAplicacao    : NavigatorTelaPrincipal,
  },
  {
    initialRouteName: 'NavCarregando'
  }
));