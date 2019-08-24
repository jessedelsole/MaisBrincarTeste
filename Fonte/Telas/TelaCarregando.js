import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,StatusBar,AsyncStorage, Image } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto';

export default class TelaCarregando extends React.Component{
  
  constructor() {
    super();
    this.inicializacaoApp();
  }
  
  userToken = '';
  
  inicializacaoApp = async () => {
    this.userToken = await AsyncStorage.getItem('userToken');

    setTimeout( () => {   this.gotoMainForm()}, 2000 ) ;

  };

  gotoMainForm = () => {
    this.props.navigation.navigate(this.userToken?'NavAplicacao':'NavAutenticacao');
  }

  render() {
    return (
      <View style={styles.container}>
          <Image source={require('./../Recursos/Imagens/logo128.png')} resizeMode='center' ></Image>
           <Text style={{ fontWeight: 'bold', fontSize: 20, color: CoresProjeto.Branco, marginLeft: 10 }}>Mais Brincar</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: CoresProjeto.Laranja
  },
});
