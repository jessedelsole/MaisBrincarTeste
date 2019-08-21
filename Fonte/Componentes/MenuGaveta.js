import React, { Component } from "react";

import { View, ScrollView,Button,Text, SafeAreaView, Image } from "react-native";
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto';

class MenuGaveta extends Component {
render() {

return (

 <SafeAreaView style={styles.container}>
     <View style={{height:50,width:'100%',justifyContent:'center',alignItems:'center', flexDirection:'row'}}>
            <Image source={require('./../Recursos/Imagens/basketball.png')} ></Image>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: CoresProjeto.Azul, marginLeft: 10 }}>Mais Brincar App</Text>
         </View>

    <View style={{ flex: 1 }}>
      <Button 
        title = 'Log-out'
        onPress={() => { this.props.navigation.navigate('NavAutenticacao') }}>
      </Button>
    </View>

  </SafeAreaView>
);

} }

const styles = {
 container: {  
  flex: 1,
    }, 
};

export default MenuGaveta;