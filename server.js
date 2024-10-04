import express from 'express';
import cors from 'cors'; // Importation de CORS
import { exec } from 'promisify-child-process';

// import bodyParser from 'body-parser';

const app = express();
app.use(cors());
  
app.use(express.json());
  
// Route pour traiter la soumission du formulaire
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Créer le corps de l'email
//   const emailBody = `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`;
var body = `To: connect.tracker.nd@gmx.fr\nFrom: connect.tracker.nd@gmx.fr\nSubject: Mail de ${name} - ${email}\n\n ${message}`;

  // Commande msmtp pour envoyer l'email
  const command = `echo "${body}" | msmtp -a default connect.tracker.nd@gmx.fr`;

  // Exécuter la commande pour envoyer l'email
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors de l'envoi de l'email : ${error.message}`);
      return res.status(500).send('Erreur lors de l\'envoi de l\'email');
    }
    if (stderr) {
      console.error(`Erreur msmtp : ${stderr}`);
      return res.status(500).send('Erreur msmtp');
    }
    console.log(`Email envoyé : ${stdout}`);
    res.send('Email envoyé avec succès');
  });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log('Serveur en écoute sur le port 3000');
});
