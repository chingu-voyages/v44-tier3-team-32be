export default {
    database: 'Voyage_44',
    username: 'voyage44',
    password: 'voyage44',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    
};