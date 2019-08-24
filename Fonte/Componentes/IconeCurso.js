import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto';

export default class IconeCurso extends React.Component {
    render() {
        return (
          <View style = {{flex:1, backgroundColor:'gray',margin:5, height:250}}>
            <TouchableOpacity style={{flex:1,width:'100%'}} onPress = {() => {this.props.onClick()}}>
            <Image style={{flex:1,width:'100%'}} source= {require('./../Recursos/Imagens/clapperboard.png')} 
               resizeMode='center' ></Image>
            <Text style={{fontWeight:'bold',width:'100%',fontSize:12, color:'black',backgroundColor:'white'}} >{this.props.nome}</Text>  
            <Text style={{fontWeight:'bold',width:'100%',fontSize:10, color:CoresProjeto.CinzaEscuro,backgroundColor:'white'}} >{this.props.descricao}</Text>  
          </TouchableOpacity>
          </View> 
        );
    }
}

