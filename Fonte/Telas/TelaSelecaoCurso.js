import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import * as CoresProjeto from '../Recursos/Constantes/CoresProjeto'

export default class TelaSelecaoCurso extends React.Component {

  render() {
    return (
     <SafeAreaView>
       <ScrollView>
      <View style={[styles.container, { margin: 5 }]}>
        <View style={{ height:200, width: '100%', backgroundColor: 'gray', margin: 10 }}>
        <Image style={{flex:1,width:'100%'}} source= {require('./../Recursos/Imagens/clapperboard.png')} 
               resizeMode='center' ></Image>
        </View>
        <TouchableOpacity style={{ width: '100%', margin: 10 }} onPress={() => { this.props.navigation.navigate('NavReprodutor') }}>
          <View style={{ backgroundColor: CoresProjeto.CinzaClaro, height: 60, width: '100%', 
            justifyContent: 'center', alignItems: 'center',flexDirection:'row' }}>
            <Image style = {{marginRight:10}}source = {require('./../Recursos/Imagens/video-camera.png')}></Image>
            <Text style={{ color:'black', fontWeight: 'bold' }}>Video-Aulas</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '100%', margin: 5 }} onPress={() => { this.props.navigation.navigate('NavReprodutor') }}>
          <View style={{ backgroundColor: CoresProjeto.CinzaClaro, height: 60, width: '100%', justifyContent: 'center', 
           alignItems: 'center' ,flexDirection:'row' }}>
              <Image style = {{marginRight:10}} source = {require('./../Recursos/Imagens/speaker.png')}></Image>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Áudios</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: '100%', margin: 5 }} onPress={() => { this.props.navigation.navigate('NavReprodutor') }}>
          <View style={{ backgroundColor: CoresProjeto.CinzaClaro, height: 60, width: '100%', justifyContent: 'center', 
          alignItems: 'center',flexDirection:'row'  }}>
             <Image style = {{marginRight:10}}source = {require('./../Recursos/Imagens/file.png')}></Image>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>PDFs</Text>
          </View>
        </TouchableOpacity>
       
        <TouchableOpacity style={{ width: '100%', margin: 5 }} onPress={() => { this.props.navigation.navigate('NavReprodutor') }}>
          <View style={{ backgroundColor: CoresProjeto.CinzaClaro, height: 60, width: '100%', justifyContent: 'center', 
          alignItems: 'center',flexDirection:'row'  }}>
             <Image style = {{marginRight:10}} source = {require('./../Recursos/Imagens/link.png')}></Image>
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Referências</Text>
          </View>
        </TouchableOpacity>
       

       
      </View>
      </ScrollView>
      </SafeAreaView>
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
