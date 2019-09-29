import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as CoresProjeto from './../Recursos/Constantes/CoresProjeto'
import { SafeAreaView } from 'react-navigation';
import { TextInput } from 'react-native-gesture-handler';
import { login_esqueceuSenhal, esqueceuSenha } from '../Autenticacoes/FirebaseMail';

export default class TelaEsqueceuSenha extends React.Component {

    state = {
        email: ''
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, flexDirection: 'column', backgroundColor: CoresProjeto.Branco }} >
                <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', padding: 20 }}>
                    <TextInput style={{ fontSize: 16, margin: 20, padding: 10, width: '100%', borderBottomColor: CoresProjeto.CinzaEscuro, borderBottomWidth: 1 }}
                        placeholder='Email'
                        onChangeText={(email) => { this.setState({ email }) }} />
                </View>
                <View style={{ margin: 20 }}>
                    <TouchableOpacity style={{
                        backgroundColor: CoresProjeto.Laranja, padding: 10, width: '100%',
                        alignItems: 'center', borderRadius: 90, flexDirection: 'row'
                    }}
                        onPress={() => { this.btnEsqueceuSenhaClick(); }}
                    >
                        <Text style={{ width: '100%', textAlign: 'center', fontSize: 16, color: 'white' }}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }


    btnEsqueceuSenhaClick = () => {

        login_esqueceuSenhal(this.state.email

        ).then(response => {
            alert('Email enviado com sucesso para : ' + this.state.email + '\n' +
                  'Verifique sua caixa de entrada!');
        }
        ).catch(error => {
            alert('Erro ao logar: ' + error.erro);
        }
        )
    }
}