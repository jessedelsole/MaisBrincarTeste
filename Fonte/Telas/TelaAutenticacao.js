import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto'
import { SafeAreaView } from 'react-navigation';

export default class TelaAutenticacao extends React.Component {
  render() {
    return (
        <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: CoresProjeto.Laranja}} >
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('./../Recursos/Imagens/logo128.png')} resizeMode='center' ></Image>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: CoresProjeto.Branco, marginLeft: 10 }}>Mais Brincar</Text>
            </View> 
            <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', padding:20 }}>
            <TouchableOpacity style={{ backgroundColor: CoresProjeto.Azul, padding: 10, width:'100%', 
                margin:10, justifyContent:'center',alignItems:'center',borderRadius:90 }}
              onPress={() => { this.props.navigation.navigate('NavAplicacao') }}  >
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: CoresProjeto.Branco }}>Login com Facebook</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: CoresProjeto.Branco, padding: 10, width:'100%',
                margin:10, justifyContent:'center',alignItems:'center',borderRadius:90 }}
              onPress={() => { this.props.navigation.navigate('NavAplicacao') }}  >
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: 'black' }}>Login com Google</Text>
            </TouchableOpacity>
            </View> 
        </SafeAreaView>
    );
  }
}

