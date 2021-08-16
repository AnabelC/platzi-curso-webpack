//Trabaja co nel sistema operativo
const fs = require ('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`)