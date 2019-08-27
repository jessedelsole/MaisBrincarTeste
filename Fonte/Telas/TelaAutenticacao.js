import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto'
import { SafeAreaView } from 'react-navigation';

export default class TelaAutenticacao extends React.Component {
  
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: CoresProjeto.Laranja }} >
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('./../Recursos/Imagens/logo128.png')} resizeMode='center' ></Image>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: CoresProjeto.Branco, marginLeft: 10 }}>Mais Brincar</Text>
        </View>
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
       
        <TouchableOpacity style={{paddingRight:30,
            backgroundColor: CoresProjeto.Branco, padding: 10, width: '100%',
            margin: 10,  alignItems: 'center', borderRadius: 90,flexDirection:'row'
          }}
            onPress={() => { this.props.navigation.navigate('NavAutenticacaoEmail') }}  >
                 <Image style= {{marginLeft:10}} source ={require('./../Recursos/Imagens/envelope.png')} />
            <Text style={{width: '100%', textAlign:'center',  fontSize: 16, color: CoresProjeto.Preto }}>Login via email</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{paddingRight:30,
            backgroundColor: CoresProjeto.Branco, padding: 10, width: '100%',
            margin: 10,  alignItems: 'center', borderRadius: 90,flexDirection:'row'
          }}
            onPress={() => { this.props.navigation.navigate('NavAplicacao') }}  >
                 <Image style= {{marginLeft:10}} source ={require('./../Recursos/Imagens/facebook.png')} />
            <Text style={{width: '100%',textAlign:'center', fontSize: 16, color: CoresProjeto.Preto }}>Login com Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingRight:30,
            backgroundColor: CoresProjeto.Branco, padding: 10, width: '100%',
            margin: 10, alignItems: 'center', borderRadius: 90,flexDirection:'row'
          }}
            onPress={() => { this.props.navigation.navigate('NavAplicacao') }}  >
            <Image style= {{marginLeft:10}} source ={require('./../Recursos/Imagens/search.png')} />
            <Text style={{width: '100%',textAlign:'center',  fontSize: 16, color: 'black' }}>Login com Google</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

