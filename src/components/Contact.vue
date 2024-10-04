<template>
  <div id="contact">
    <div class="min-h-screen flex items-start justify-center">
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-3xl font-bold text-blue-400 mb-4">Contactez-moi</h2>
        <p class="mb-6 text-gray-300">
          Vous souhaitez discuter d'un projet, d'une opportunité, ou simplement échanger sur des sujets tech ?
          N'hésitez pas à me contacter via le formulaire ci-dessous ou directement par email.
        </p>
        <!-- Formulaire de contact -->
        <!-- <form action="../../../mon_site/src/send_email.php" method="POST" class="space-y-4"> -->
          <form @submit.prevent="sendEmail" class="space-y-4">
            <div>
              <label for="name" class="block text-sm text-gray-400">Nom</label>
              <input v-model="formData.name" type="text" id="name" name="name" required class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" placeholder="Votre nom">
            </div>

            <div>
              <label for="email" class="block text-sm text-gray-400">Email</label>
              <input v-model="formData.email" type="email" id="email" name="email" required class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" placeholder="Votre email">
            </div>

            <div>
              <label for="message" class="block text-sm text-gray-400">Message</label>
              <textarea v-model="formData.message" id="message" name="message" rows="4" required class="w-full p-2 bg-gray-700 border border-gray-600 rounded-md text-white" placeholder="Votre message"></textarea>
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

<script>
import axios from 'axios';

export default {
  setup() {
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    sendEmail() {
      axios.post('http://localhost:3000/send-email', this.formData)
        .then(response => {
          console.log('Email envoyé:', response.data);
          alert('Votre message a été envoyé avec succès.');
          this.$router.push('#/').then(() => {
            window.location.reload();
          });

        })
        .catch(error => {
          console.error('Erreur lors de l\'envoi de l\'email :', error);
          alert('Une erreur est survenue lors de l\'envoi.');
        });
    }
  }
};
</script>


<style>
#contact {
  padding-top : 4rem;
  padding-bottom : 5rem;
}
</style>
