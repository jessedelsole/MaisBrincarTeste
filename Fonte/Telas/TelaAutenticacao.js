import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto'
import { SafeAreaView } from 'react-navigation';
import BotaoLogin from '../Componentes/BotaoLogin';
import * as Facebook from 'expo-facebook';
import axios from 'axios';

export default class TelaAutenticacao extends React.Component {

  static navigationOptions = {
    header: null,
    headerBackTitle: 'Voltar'
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: CoresProjeto.Laranja }} >
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./../Recursos/Imagens/logo128.png')} resizeMode='center' ></Image>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: CoresProjeto.Branco, marginLeft: 10 }}>Mais Brincar</Text>
        </View>
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', padding: 20 }}>

          <BotaoLogin onPress={() => { this.props.navigation.navigate('NavAutenticacaoEmail') }}
            source={require('./../Recursos/Imagens/envelope.png')}
            text={'Login via Email'}>
          </BotaoLogin>

          <BotaoLogin onPress={() => { logIn_Facebook(this); }}
            source={require('./../Recursos/Imagens/facebook.png')}
            text={'Login com Facebook'}>
          </BotaoLogin>

          <BotaoLogin onPress={() => { this.props.navigation.navigate('NavAplicacao') }}
            source={require('./../Recursos/Imagens/search.png')}
            text={'Login com Gmail'}>
          </BotaoLogin>
        </View>
      </SafeAreaView>
    );
  }
}


async function logIn_Facebook(that) {
  try {
    const {
      type,
      token,
      expires,
      permissions,
      declinedPermissions,
    } = await Facebook.logInWithReadPermissionsAsync('361184901471634', {
      permissions: ['public_profile','user_posts','user_hometown', 'email'],
    });
    
    if (type === 'success') {
      axios(`https://graph.facebook.com/me?access_token=${token}&fields=birthday,name,email`).then( response => {
        var user = response.data;
        Alert.alert('User information',`Hi ${JSON.stringify(user)}!`);
        that.props.navigation.navigate('NavAplicacao')
      })
    } else {
       alert('Erro ao logar');
    }
  } catch ({ message }) {
    alert(`Facebook Login Error: ${message}`);
  }
}
