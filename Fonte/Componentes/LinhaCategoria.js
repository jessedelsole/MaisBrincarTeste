import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import IconeFilme from './IconeFilme';

export default class LinhaCategoria extends React.Component{
    
    state = {
        filmes : []
      }
      
      filmes = [];
        componentDidMount(){
          
           this.filmes = [{nome:'Filme1'}, {nome:'Filme2'}, {nome:'Filme3'}, {nome:'Filme4'}, {nome:'Filme5'}, 
           {nome:'Filme1'}, {nome:'Filme2'}, {nome:'Filme3'}, {nome:'Filme4'}, {nome:'Filme5'}];
      
           this.setState( {filmes : this.filmes});
      
        }
    


  render(){
  return (
    <View style={{width:'100%',height:100, backgroundColor:'white', margin:2}}>
        <Text style={{fontWeight:'bold'}} >{this.props.nomeCategoria}</Text>
        <FlatList style={{flex:1, width:'100%'}}
       data={this.state.filmes}
       keyExtractor= {(item,index)=> index.toString()}
       horizontal={true}
       renderItem = {({item})=> <IconeFilme nomeFilme={item.nome}></IconeFilme> }
     
       ></FlatList>
    
    </View>
  );
  }
}

