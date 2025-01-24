import express from 'express';
import cors from 'cors';
import path from 'path';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Serve static files from the frontend directory
app.use(express.static(path.join(path.resolve(), 'src/frontend')));

app.use('/api/tasks', taskRoutes);

// Fallback route for handling 404 errors
app.use((req, res) => {
    res.status(404).send('Not Found');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});