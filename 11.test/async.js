import cryptoJs from 'crypto-js'

export function encryptMessage(message, key, callback){
    const encryptedMessage = cryptoJs.AES.encrypt(message, key).toString();
    callback(encryptedMessage);
}

export function encryptMessagePromise(message, key){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const encryptedMessage = cryptoJs.AES.encrypt(message, key).toString();

            if(encryptedMessage){
                resolve(encryptedMessage);
            }else{
                reject(new Error('Failed to encrypt the message'));
            }
        }, 2000);
    })
}

const message = {
    name: 'John Doe',
    password: 'password123'
}

const secretKey = "mySecretKey123"

encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
    console.log("callback",encryptedMessage);
});


encryptMessagePromise(JSON.stringify(message), secretKey)
    .then((encryptedMessage) => {
        console.log("promise", encryptedMessage);
    })
    .catch((error) => {
        console.error("promise", error);
    });