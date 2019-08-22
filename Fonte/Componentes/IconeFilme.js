import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native';


export default class IconeFilme extends React.Component {
    render() {
        return (
          <View style = {{flex:1, backgroundColor:'gray',margin:5, height:200}}>
            <TouchableOpacity style={{flex:1,width:'100%'}} onPress = {() => {this.props.onClick()}}>
            <Image style={{flex:1,width:'100%'}} source= {require('./../Recursos/Imagens/clapperboard.png')} resizeMode='center' ></Image>
          </TouchableOpacity>
          </View>
        );
    }
}

