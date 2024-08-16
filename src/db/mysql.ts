import mysql from 'promise-mysql';

const poolConnection = mysql.createPool({
    host:'localhost',
    // host: 'd4d9-103-163-248-30.ngrok-free.app', // 'localhost'
    user: 'root',
    password: 'antoLeon',
    database: 'vehicle_breakdown_assistance',
    port: 3306
});

let pool: mysql.Pool;

export const queryDB = async (query: string, args: any[] = []): Promise<any> => {
    if (!pool) pool = await poolConnection;
    return pool.query(query, args);
};
