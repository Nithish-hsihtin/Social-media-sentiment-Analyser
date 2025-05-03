import express from 'express';
import cors from 'cors';
import axios from 'axios';
import Sentiment from 'sentiment';
import redditRoutes from './routes/reddit.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/reddit', redditRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});