import Gun from 'gun';
import express from 'express';
import http from 'http';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(Gun.serve);

// Railway assigns PORT dynamically
const PORT = process.env.PORT || 8765;

// create server and attach gun
const server = http.createServer(app);
Gun({ web: server });

// log startup confirmation
server.listen(process.env.PORT || 8080, '0.0.0.0', () => {
  console.log(`✅ GUN relay running on port ${process.env.PORT || 8080}`);
});

