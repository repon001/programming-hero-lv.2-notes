import crypto from 'crypto';
import { saveTokenToFile } from './utils/io.js';

function log(message) {
    console.log(message);
}

export function generateToken(logger) {
    const token = crypto.randomBytes(16).toString('hex');
    if(logger) logger(token);
    return token
}

export async function storeToken(data) {
    if(!data){
        throw new Error('No data provided');
    }    
    await saveTokenToFile(data, 'token.txt');
}

const token = generateToken(log);
storeToken(token);