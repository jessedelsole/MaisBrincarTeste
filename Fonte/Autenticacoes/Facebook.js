import * as Facebook from 'expo-facebook';
import axios from 'axios';

export function login_Facebook() {
    return new Promise(
        async (resolve, reject) => {

            try {
                const result = await Facebook.logInWithReadPermissionsAsync('361184901471634', {
                    permissions: ['public_profile', 'user_posts', 'user_hometown', 'email'],
                });

                console.log('result ==> '+ JSON.stringify(result));

                if (result.type === 'success') {

                    axios(`https://graph.facebook.com/me?access_token=${result.token}&fields=birthday,name,email`).then(response => {
                        var user = response.data;
                        console.log('graph ==> '+ JSON.stringify(response));
                        resolve({token:result.token})
                    })
                } else {
                     reject();    
                }
            } catch ({ message }) {
                console.log('catch : '+ message);
                reject();
            }

        }
    );
}