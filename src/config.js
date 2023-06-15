import {config as dotenv} from 'dotenv';
dotenv();  

console.log(process.env.NICKNAME);

export const dbConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database:"jwtasks"
}