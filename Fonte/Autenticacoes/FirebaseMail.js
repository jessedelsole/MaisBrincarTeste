
import { Alert } from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAOr2_f-QOymmw3_xeYRhqmJjTJiskN0s4",
    authDomain: "testeloginfacebook-bbf04.firebaseapp.com",
    databaseURL: "https://testeloginfacebook-bbf04.firebaseio.com",
    projectId: "testeloginfacebook-bbf04",
    storageBucket: "",
    messagingSenderId: "120457868902",
    appId: "1:120457868902:web:75a45a01509394a9"
};

firebase.initializeApp(firebaseConfig);


export function login_FirebaseMail(email, senha) {
    
    return new Promise((resolve, reject) => {
    
        firebase.auth().signInWithEmailAndPassword(
            email,
            senha,
        ).then(response => {

            console.log( 'response:'+ JSON.stringify(response));
            resolve({ sucesso: true })
        }
        ).catch(error => {

            console.log('error: '+ JSON.stringify(error));
            reject({ sucesso: false })
        }
        )
    });
}




export function cadastrarEmail(that, email, senha) {

    firebase.auth().createUserWithEmailAndPassword(
        email,
        senha
    ).then(response => {
        Alert.alert('Cadastrado com sucesso', JSON.stringify(response));
    }).catch(error => {
        Alert.alert('Erro cadastro', JSON.stringify(error));
    });
}

export function esqueceuSenha(email) {

    firebase.auth().sendPasswordResetEmail(
        email,

    ).then(response => {
        Alert.alert('Enviado para seu email!', JSON.stringify(response));
    }).catch(error => {
        Alert.alert('Erro ao enviar', JSON.stringify(error));
    });
}
