import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto'
import { SafeAreaView } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';

export default class TelaCadastroEmail extends React.Component {

    state = {
        email: '',
        senha: '',
        confirmacaoSenha: ''
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: CoresProjeto.Branco }} >
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <TextInput style={{fontSize:16, margin:20, padding:10, width:'100%',borderBottomColor: CoresProjeto.CinzaEscuro,borderBottomWidth:1 }} 
                    placeholder='Email'
                        onChangeText={(email) => { this.setState({ email }) }} />
                    <TextInput style={{fontSize:16,margin:20,padding:10, width:'100%', borderBottomColor: CoresProjeto.CinzaEscuro,borderBottomWidth:1 }}
                     placeholder='Senha'
                     secureTextEntry={true}
                        onChangeText={(senha) => { this.setState({ senha }) }} />
                    <TextInput style={{fontSize:16,margin:20,padding:10, width:'100%', borderBottomColor: CoresProjeto.CinzaEscuro,borderBottomWidth:1 }}
                     placeholder='Confirmação Senha'
                     secureTextEntry={true}
                        onChangeText={(senha) => { this.setState({ senha }) }} />
                </View>
                <View style={{margin:20}}> 
                <TouchableOpacity style={{
                    backgroundColor: CoresProjeto.Laranja, padding: 10, width: '100%',
                    alignItems: 'center', borderRadius: 90, flexDirection: 'row' }}
                    onPress={() => { this.props.navigation.navigate('NavAplicacao') }}  >
                    <Text style={{ width: '100%', textAlign: 'center', fontSize: 16, color: 'white' }}>Criar conta</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

