import express from 'express';
import { readFile } from 'fs/promises';
import cors from 'cors';

// read dummy data
const products = JSON.parse(await readFile(new URL('./products.json', import.meta.url)));

const app = express();

app.use(
    cors({
        origin: ['localhost:3000', 'localhost:3500'],
        credentials: true,
        methods: ['PUT', 'POST'],
        maxAge: 3600,
        exposedHeaders: ['x-custom-header'],
    })
);

app.use(express.json());

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.post('/api/products', (req, res) => {
    // todo: product creation logic here...
    res.status(201).json({ success: true });
});

app.put('/api/products/:id', (req, res) => {
    // todo: product update logic here...
    res.json({ success: true });
});

app.listen(4000, () => console.log(`Listening on port 4000`));
