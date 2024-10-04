<template>
  <div id="contact">
    <div class="min-h-screen flex items-center justify-center">
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-3xl font-bold text-blue-400 mb-4">Contactez-moi</h2>
        <p class="mb-6 text-gray-300">
          Vous souhaitez discuter d'un projet, d'une opportunité, ou simplement échanger sur des sujets tech ?
          N'hésitez pas à me contacter via le formulaire ci-dessous ou directement par email.
        </p>

        <!-- Formulaire de contact -->
        <form action="" v-on:submit="sendEmail()" class="space-y-4">
          <div>
            <label for="name" class="block text-sm text-gray-400">Nom</label>
            <input type="text" id="name" name="name" required class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" placeholder="Votre nom">
          </div>

          <div>
            <label for="email" class="block text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" required class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" placeholder="Votre email">
          </div>

          <div>
            <label for="message" class="block text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" rows="4" required class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" placeholder="Votre message"></textarea>
          </div>

          <button type="submit" class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold">Envoyer</button>
        </form>

        <!-- Liens de contact direct -->
        <div class="mt-8">
          <p class="text-gray-300">Ou contactez-moi directement à :</p>
          <p class="text-blue-400"><a href="mailto:nicolasdiot65@gmail.com">nicolasdiot65@gmail.com</a></p>
        </div>
      </div>
    </div>
  </div>
          
</template>

<script setup>
// import { exec } from 'promisify-child-process';
// import { Email } from "../assets/smtp/smtp.js";
function sendEmail() {
  console.log('test');
   const name = document.getElementById('name').value;
   const email = document.getElementById('email').value;
   const message = document.getElementById('message').value;
   var body = `To: connect.tracker.nd@gmx.fr\nFrom: connect.tracker.nd@gmx.fr\nSubject: Mail de ${name} - ${email}\nMessage: ${message}`;
  //  Email.send({
  //       Host: "mail.gmx.com",
  //       Username: "connect.tracker.nd@gmx.fr",
  //       Password: "exempleXXX",
  //       To: 'connect.tracker.nd@gmx.fr',
  //       From: email,
  //       Subject: name,
  //       Body: message
  //   })
  //   .then(function (message) {
  //       alert("Email envoyé avec succès") // Message d'alerte en cas de succès de l'envoi de l'email
  //       console.log(message)
  //   })
  //   .catch(function (error) {
  //     alert("Erreur lors de l'envoi du message.")
  //     console.log(error)
  //   });
  exec('echo truc')
    // exec(`echo "${body}" | msmtp -a default connect.tracker.nd@gmx.fr`);
  //  const command = `echo "${body}" | msmtp --subject="Contact de ${name}" --from="${email}" connect.tracker.nd@gmx.fr`;
  //  const child = exec(command);
  //  const { stdout, stderr } = child;
   alert('Message envoyé avec succès.');
 }

</script>


<style>
#contact {
  padding-top : 4rem;
  padding-bottom : 5rem;
}
</style>
