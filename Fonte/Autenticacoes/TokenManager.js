import { AsyncStorage } from 'react-native';


export async function guardarToken(tipo, token){

    console.log('token==> :'+ token);

    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('tipo',tipo); 

}

export async function recuperarToken(){

    userToken = await AsyncStorage.getItem('userToken');
    tipo      = await AsyncStorage.getItem('tipo');

    console.log('userToken = '+ userToken);
    console.log('tipo', tipo);

    return { userToken,tipo };
} 

export async function deletarToken(){
   
    await AsyncStorage.clear();
}