import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import * as CoresProjeto from '../Recursos/Constantes/CoresProjeto'
import BotaoSelecao from '../Componentes/BotaoSelecao';

export default class TelaSelecaoCurso extends React.Component {

  static navigationOptions = {
    headerBackTitle:'Voltar'
    
  }


  
  render() {
    return (
     <SafeAreaView>
       <ScrollView style= {{padding:10}}>
      <View style={[styles.container]}>
        <Text style={{marginTop:10,marginBottom:10, fontSize:20,fontWeight:'bold',textAlign:'center',width: '100%' }}>{this.props.navigation.getParam('curso').nome}</Text>
        <View style={{ height:200, width: '100%', backgroundColor: 'gray'}}>
        <Image style={{flex:1,width:'100%'}} source= {require('./../Recursos/Imagens/clapperboard.png')} 
               resizeMode='center' ></Image>
        </View>

        
        <Text style={{textAlign:'left',width:'100%', marginTop:20, marginBottom:20, borderBottomColor:CoresProjeto.CinzaClaro,borderBottomWidth:1}}>{this.props.navigation.getParam('curso').descricao} </Text>

        <BotaoSelecao 
         text = {'Vídeo-Aulas'} 
         source ={require('./../Recursos/Imagens/video-camera.png')} 
         onPress= { () => {this.props.navigation.navigate('NavListagemAulas') }} >  
        </BotaoSelecao>

        <BotaoSelecao 
         text = {'Áudios'} 
         source ={require('./../Recursos/Imagens/speaker.png')} 
         onPress= { () => {this.props.navigation.navigate('NavListagemAudios') }} >  
        </BotaoSelecao>

        <BotaoSelecao 
         text = {'PDFs'} 
         source ={require('./../Recursos/Imagens/file.png')} 
         onPress= { () => {this.props.navigation.navigate('NavListagemPdfs') }} >  
        </BotaoSelecao>

        <BotaoSelecao 
         text = {'Referências'} 
         source ={require('./../Recursos/Imagens/link.png')} 
         onPress= { () => {this.props.navigation.navigate('NavListagemReferencias') }} >  
        </BotaoSelecao>


      
        
    


       

       
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
    
  },
});
