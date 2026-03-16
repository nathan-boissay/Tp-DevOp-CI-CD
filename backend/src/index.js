import express from 'express';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running!', timestamp: new Date() });
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});

export default app; // Export for testing
