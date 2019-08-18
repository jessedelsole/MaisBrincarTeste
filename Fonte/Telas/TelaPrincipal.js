import React from 'react';
import { StyleSheet, SafeAreaView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinhaCategoria from '../Componentes/LinhaCategoria';

export default class TelaPrincipal extends React.Component{
  
state = {
  categorias : []
}

categorias = [];

componentDidMount(){
 
    for(i=1;i<=10;i++){
          filmes=[];
          for(j=1;j<=10;j++){
            filmes.push({nome:'Filme'+j});
          }  
          this.categorias.push({nome:'Categoria'+i , filmes});
     }
     this.setState( {categorias : this.categorias});
  }

  render(){
  return (
    <SafeAreaView style={styles.container}>
       <FlatList style={{flex:1, width:'100%'}}
       data={this.state.categorias}
       keyExtractor= {(item,index)=> index.toString()}
       renderItem = {({item})=> <LinhaCategoria nomeCategoria={item.nome} filmes={item.filmes}></LinhaCategoria> }
        ></FlatList>
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
