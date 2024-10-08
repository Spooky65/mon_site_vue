<template>
  <div id="contact">
    <div class="min-h-screen flex items-start justify-center">
      <div class="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 class="text-3xl font-bold text-blue-400 mb-4">Contactez-moi</h2>
        <p class="mb-6 text-gray-300">
          Vous souhaitez discuter d'un projet, d'une opportunité, ou simplement échanger sur des sujets tech ?
          N'hésitez pas à me contacter via le lien ci-dessous ou à cette adresse mail.
        </p>
        <!-- Formulaire de contact -->
        <!-- <form action="../../../mon_site/src/send_email.php" method="POST" class="space-y-4"> -->
          

        <!-- Liens de contact direct -->
        <div class="mt-8">          
          <p class="text-blue-400"><a href="mailto:nicolasdiot65@gmail.com">nicolasdiot65@gmail.com</a></p>

          <p class="text-gray-300">Téléphone : +33 6 72 27 49 98</p>
        </div>
      </div>
    </div>
  </div>
          
</template>

<script>
export default {
  setup() {
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        message: '',
      }
    };
  },
  methods: {
    sendEmail() {
      alert('Cliquer sur le lien ci-dessous pour envoyer votre message.');
      // axios.post('http://localhost:3000/send-email', this.formData)
      //   .then(response => {
      //     console.log('Email envoyé:', response.data);
      //     alert('Votre message a été envoyé avec succès.');
      //     this.$router.push('#/').then(() => {
      //       window.location.reload();
      //     });

      //   })
      //   .catch(error => {
      //     console.error('Erreur lors de l\'envoi de l\'email :', error);
      //     alert('Une erreur est survenue lors de l\'envoi.');
      //   });
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
