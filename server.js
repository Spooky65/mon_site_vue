import express from 'express';
import cors from 'cors'; // Importation de CORS
import fs from 'fs';

// import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.options('*', cors()); // Autorise les requêtes OPTIONS pour toutes les routes

  
app.use(express.json());
  
app.get('/portfolio', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  var port = req.headers['x-forwarded-port'] || req.connection.remotePort;
  var date = req.headers['x-forwarded-date'] || new Date();
  var url = req.headers['x-forwarded-url'] || req.query['truePath'];
  // var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  var data = `${date} | ${ip}:${port} | ${url}\n`;
  fs.writeFile('connect', data, { flag: 'a+' }, (err) => { 
    // In case of a error throw err. 
    if (err) throw err; 
  }) 
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
