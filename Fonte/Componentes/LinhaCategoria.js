import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import IconeFilme from './IconeFilme';

export default class LinhaCategoria extends React.Component {
  render() {
    return (
     
      <View style={{ width: '100%', height: 100, backgroundColor: 'white', margin: 2 }}>
         
            <Text style={{ fontWeight: 'bold' }} >{this.props.nomeCategoria}</Text>
          
        <FlatList style={{ flex: 1, width: '100%' }}
          data={this.props.filmes}
          keyExtractor={(item, index) => index.toString()}
          horizontal={true}
          renderItem={({ item }) => <IconeFilme nomeFilme={item.nome} onClick = {this.props.onClick} ></IconeFilme>}
        ></FlatList>
      </View>
    );
  }
}

