import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator,StatusBar,AsyncStorage } from 'react-native';

export default class TelaCarregando extends React.Component{
  
  constructor() {
    super();
    this.inicializacaoApp();
  }

  inicializacaoApp = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    //this.props.navigation.navigate(userToken?'NavAplicacao':'NavAutenticacao');
    this.props.navigation.navigate('NavAutenticacao');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
