import * as Google from 'expo-google-app-auth';


export function login_Google() {
    return new Promise(
        async (resolve, reject) => {

            try {
                const result = await Google.logInAsync({
                    androidClientId: '1055788320661-4n2enmg163jco3u1nsvqofu6m033b6eq.apps.googleusercontent.com',
                    iosClientId: '1055788320661-a2vgbfvhr5fr14afoea3f0kd95vg5mia.apps.googleusercontent.com',
                    scopes: ['profile', 'email'],
                });

                console.log(JSON.stringify(result));

                if (result.type === 'success') {
                    resolve({token:result.accessToken});
                } else {

                    reject({});
                }
            } catch (e) {
                console.log(e.message);
                reject({});
            }
        }
    );
}