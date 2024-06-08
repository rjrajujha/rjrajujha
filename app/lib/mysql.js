import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function connectToDatabase() {
    try {
        const connection = await pool.getConnection();
        console.log('Connected to MySQL');
        connection.release();
    } catch (error) {
        console.error('Error connecting to MySQL:', error);
        throw error;
    }
}

connectToDatabase(); // Invoke the connection function when the module is imported

export default pool;