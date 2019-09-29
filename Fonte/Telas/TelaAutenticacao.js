import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto'
import { SafeAreaView } from 'react-navigation';
import BotaoLogin from '../Componentes/BotaoLogin';
import { login_Google } from '../Autenticacoes/Google';
import { login_Facebook } from '../Autenticacoes/Facebook';
import { guardarToken }from '../Autenticacoes/TokenManager';


export default class TelaAutenticacao extends React.Component {

  static navigationOptions = {
    header: null,
    headerBackTitle: 'Voltar'
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: CoresProjeto.Laranja }} >
        <TouchableOpacity style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}
          onPress={() => { this.props.navigation.navigate('NavAplicacao'); }}>
          <Image source={require('./../Recursos/Imagens/logo128.png')} resizeMode='center' ></Image>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: CoresProjeto.Branco, marginLeft: 10 }}>Mais Brincar</Text>
        </TouchableOpacity>
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', padding: 20 }}>

          <BotaoLogin onPress={() => { this.props.navigation.navigate('NavAutenticacaoEmail') }}
            source={require('./../Recursos/Imagens/envelope.png')}
            text={'Login via Email'}>
          </BotaoLogin>

          <BotaoLogin onPress={() => { this.btnLoginFacebookClick(); }}
            source={require('./../Recursos/Imagens/facebook.png')}
            text={'Login com Facebook'}>
          </BotaoLogin>

          <BotaoLogin onPress={() => { this.btnLoginGoogleClick(); }}
            source={require('./../Recursos/Imagens/search.png')} 
            text={'Login com Gmail'}>
          </BotaoLogin>
        </View>
      </SafeAreaView> 
    );
  }

  btnLoginGoogleClick = () => {

    login_Google().then(
      async response => {
        
        await guardarToken('Google', response.token);
        this.props.navigation.navigate('NavAplicacao');

      }
    ).catch(
      reject => {
        alert('Erro ao logar');
      }
    )
  }


  btnLoginFacebookClick = () => {

    login_Facebook().then(
     async response => {
      
        await guardarToken('Facebook', response.token);
        this.props.navigation.navigate('NavAplicacao');
      }
    ).catch(
      reject => {
        alert('Erro ao logar')
      }
    )
  }

}