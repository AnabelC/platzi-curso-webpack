//Trabaja co nel sistema operativo
const fs = requite ('fs');

fs.writeFileSync('./.env', `API=${process.env.API}\n`)