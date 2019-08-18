import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto'

export default class TelaSelecaoVideo extends React.Component {

  render() {
    return (
      <View style={[styles.container, { margin: 10 }]}>
        <View style={{ flex: 1, width: '100%', backgroundColor: 'gray', margin: 10 }}></View>
        <TouchableOpacity style={{ width: '100%', margin: 10 }} onPress={() => { this.props.navigation.navigate('NavReprodutor') }}>
          <View style={{ backgroundColor: CoresProjeto.Azul, height: 80, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: CoresProjeto.Branco, fontWeight: 'bold' }}>Assistir</Text>
          </View>
        </TouchableOpacity>
        <View style={{ flex: 2, width: '100%', margin: 10 }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
