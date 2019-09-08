import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Alert } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto'
import { SafeAreaView } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import {login_FirebaseMail} from '../Autenticacoes/FirebaseMail';

export default class TelaAutenticacaoEmail extends React.Component {

    static navigationOptions = {
        
        headerBackTitle:'Voltar'
      }

    state = {
        email: '',
        senha: ''
    }
    render() {
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: CoresProjeto.Branco }} >
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <TextInput style={{ fontSize: 16, margin: 20, padding: 10, width: '100%', borderBottomColor: CoresProjeto.CinzaEscuro, borderBottomWidth: 1 }}
                        placeholder='Email'
                        onChangeText={(email) => { this.setState({ email }) }} />
                    <TextInput style={{ fontSize: 16, margin: 20, padding: 10, width: '100%', borderBottomColor: CoresProjeto.CinzaEscuro, borderBottomWidth: 1 }}
                        placeholder='Senha'
                        secureTextEntry={true}
                        onChangeText={(senha) => { this.setState({ senha }) }} />
                    <View style={{ padding: 20, flexDirection: 'row', alignContent: 'center' }}>
                        <TouchableOpacity style={{ flex: 1}} 
                        onPress ={ ()=> { this.props.navigation.navigate('NavCadastroEmail') }} >
                        <Text style={{ color: 'blue', textAlign: 'left' }} >Criar Conta</Text>
                        </TouchableOpacity >
                        <TouchableOpacity style={{ flex: 1}}
                          onPress ={ ()=> { this.props.navigation.navigate('NavEsqueceuSenha') }}>
                        <Text style={{ color: 'blue', flex: 1, textAlign: 'right' }} >Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ margin: 20 }}>
                    <TouchableOpacity style={{
                        backgroundColor: CoresProjeto.Laranja, padding: 10, width: '100%',
                        alignItems: 'center', borderRadius: 90, flexDirection: 'row'
                    }}
                        onPress={() => { this.btnLogarClick()}}  >
                        <Text style={{ width: '100%', textAlign: 'center', fontSize: 16, color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }


    btnLogarClick = () => {
      
       login_FirebaseMail(this, this.state.email, this.state.senha);
    
    }
    

}

