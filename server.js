import Gun from 'gun';
import express from 'express';
import http from 'http';
import cors from 'cors';

const app = express();

// CORS
app.use(cors());

// Health check route (so Railway doesn’t return 502)
app.get('/', (_req, res) => res.send('🚀 GUN relay is running!'));

// Serve GUN
app.use(Gun.serve);

// Create HTTP server
const server = http.createServer(app);
Gun({ web: server });

// Listen on Railway-assigned port
const PORT = process.env.PORT || 8080;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ GUN relay running on port ${PORT}`);
});

