import Gun from 'gun';
import 'gun/sea.js';
import 'gun/axe.js';

const PORT = process.env.PORT || 8765;
const gun = Gun({ web: require('http').createServer().listen(PORT) });

console.log(`GUN relay running on port ${PORT}`);

