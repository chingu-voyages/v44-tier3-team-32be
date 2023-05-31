import express from 'express';
import { Pool } from 'pg';
import config from './config';

const app = express();
const pool = new Pool(config);

app.use(express.json());

app.get('/api/users', async (req, res) => {
const { rows } = await pool.query('SELECT * FROM users');
res.json(rows);
});

app.post('/api/users', async (req, res) => {
const { name, email } = req.body;
const { rows } = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email]);
res.json(rows[0]);
});

app.listen(3000, () => {
console.log('Server started on port 3000');
});
