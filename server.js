import Gun from 'gun';
import express from 'express';
import http from 'http';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(Gun.serve);

const server = http.createServer(app);
const gun = Gun({ web: server });

const PORT = process.env.PORT || 8765;
server.listen(PORT, () => {
  console.log(`✅ GUN relay running on port ${PORT}`);
});

