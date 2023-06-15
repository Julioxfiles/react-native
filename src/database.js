import mysql from 'mysql2/promise';
import { dbConfig } from './config';

export const dbConnect = async () => {
    try {
            const conn = mysql.createConnection(dbConfig);
            return conn; 
        } catch (error) {
            console.log(error);
        }
}


