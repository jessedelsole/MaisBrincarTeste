import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinhaCategoria from '../Componentes/LinhaCategoria';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto';
import IconeCurso from '../Componentes/IconeCurso';
import { ServiceCursos } from '../WebServices/ServiceCursos';


export default class TelaPrincipal extends React.Component {

  static navigationOptions = {
    header: null,
    headerBackTitle:'Voltar'
  }
  state = {
    cursos: []
  }

  componentDidMount() {
    ServiceCursos.getCursos().then((cursos) => this.setState({ cursos }));
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ height: 50, width: '100%', flexDirection: 'row', padding: 5, 
          borderBottomColor: CoresProjeto.CinzaClaro, borderBottomWidth: 1 }}>
          <TouchableOpacity
            onPress={() => { this.props.navigation.openDrawer() }}
          ><Image source={require('./../Recursos/Imagens/menu.png')} ></Image>
          </TouchableOpacity>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} >
            <Image source={require('./../Recursos/Imagens/basketball.png')} ></Image>
            <Text style={{ fontSize: 20, color: CoresProjeto.Azul, marginLeft: 10 }}>Mais Brincar</Text>
          </View>
        </View>

        <FlatList style={{ flex: 1, width: '100%', backgroundColor:CoresProjeto.Gelo, margin:10 }}
          data={this.state.cursos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => <IconeCurso onClick={() => 
               this.props.navigation.navigate('NavSelecaoCurso', {curso: item})}
            nome={item.nome} descricao={item.descricao} > </IconeCurso>}
          numColumns={2}

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
    justifyContent: 'center'
  },
});
