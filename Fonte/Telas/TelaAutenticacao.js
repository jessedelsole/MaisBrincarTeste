import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto'

export default class TelaAutenticacao extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: CoresProjeto.Branco }}>
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('./../Recursos/Imagens/basketball.png')} ></Image>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: CoresProjeto.Azul, marginLeft: 10 }}>Mais Brincar App</Text>
          </View>
        </View>
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: CoresProjeto.Azul, padding: 10 }}>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('NavAplicacao') }}  >
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: CoresProjeto.Branco }}>Login com Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: CoresProjeto.Branco, padding: 10 }}>
            <TouchableOpacity
              onPress={() => { this.props.navigation.navigate('NavAplicacao') }}  >
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: CoresProjeto.Azul }}>Login com Google</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

