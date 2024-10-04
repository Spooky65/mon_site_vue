<template>
  <div id="portfolio">
    <div class="flex flex-col items-center max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-6">
      <img class="rounded-full w-32 h-32 mb-4 border-4 border-blue-500" src="/src/assets/photo.jpg" alt="Photo de Nicolas Diot">
      <h2 class="text-2xl font-bold mb-2 text-blue-300">Nicolas Diot</h2>
      <p class="text-center text-gray-300">
        Développeur Full-Stack, fan de code et de bon café ☕.<br>
        Je construis des PC quand je ne suis pas en train d'améliorer des applications 🖥️.<br>
        Toujours prêt à relever de nouveaux défis technologiques.<br>
        Passionné par la science-fiction, et si vous voulez parler "code et cosmos", je suis là 🚀.
      </p>
    </div>

    <div class="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-6">
      <h3 class="text-xl font-semibold text-blue-300 mb-2">Objectif Professionnel</h3>
      <p class="text-gray-300 text-center">
        Je suis à la recherche d'opportunités en tant que développeur Full-Stack pour travailler sur des projets innovants dans un environnement dynamique. Toujours en quête de nouveaux défis technologiques, je souhaite contribuer à des équipes créatives tout en continuant à me perfectionner dans mes compétences techniques.
      </p>
    </div>

    <div class="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-6">
      <h2 class="text-2xl font-bold text-blue-300 mb-4">Compétences Techniques</h2>
      <ul class="grid grid-cols-2 gap-4 text-gray-300">
        <li>PHP (Symfony, Laravel)</li>
        <li>JavaScript (Vue.js, jQuery)</li>
        <li>Java (Spring)</li>
        <li>Docker, Jenkins, Git</li>
        <li>HTML/CSS, Tailwind, Bootstrap</li>
      </ul>
    </div>

    <div class="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-6">
      <h2 class="text-3xl font-bold text-blue-300 mb-4">Projets en Vedette</h2>
      <!-- Exemples de projets -->
      <div class="mb-6">
        <h3 class="text-2xl text-blue-200">WaveTask - Gestionnaire de Kanban</h3>
        <p class="text-gray-300">Outil de gestion de tâches en temps réel avec Java Spring et Angular.</p>
        <span class="text-gray-400">Tech : Java, Angular, Docker</span>
      </div>

      <div class="mb-6">
        <h3 class="text-2xl text-blue-200">Portefeuille Personnel</h3>
        <p class="text-gray-300">Site web pour présenter mes projets et compétences.</p>
        <span class="text-gray-400">Tech : Symfony, PHP, Twig, Bootstrap</span>
      </div>
    </div>
    
    <div class="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-6">
      <!-- Titre du projet -->
      <h2 class="text-3xl font-bold mb-4 text-blue-300">WaveTask - Gestionnaire de Kanban</h2>
      
      <!-- Image du projet -->
      <img class="rounded-lg mb-4 w-full" src="/src/assets/WaveTask.jpg" alt="Aperçu de WaveTask">
    
      <!-- Description du projet -->
      <p class="text-gray-300 mb-4">
        WaveTask est une application de gestion de tâches inspirée du système Kanban. Elle permet aux équipes de gérer leurs flux de travail facilement avec des fonctionnalités de drag-and-drop, des API REST, et une architecture conteneurisée via Docker.
      </p>
      <div class="flex space-x-4">
        <!-- Lien vers le site avec logo -->
        <a href="https://wavetask.com" target="_blank" class="flex items-center space-x-2 text-blue-400 hover:underline">
          <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" class="w-6 h-6" alt="Website Logo">
          <span>Visiter le site</span>
        </a>
        
        <!-- Lien vers le GitHub avec un logo mieux adapté -->
        <a href="https://github.com/Achapeau/POEC_FIL_ROUGE_KAMBAN/tree/dev" target="_blank" class="flex items-center space-x-2 text-blue-400 hover:underline">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" class="w-6 h-6" alt="GitHub Logo">
          <span>Visiter le GitHub</span>
        </a>
      </div>
    </div>
    <div class="max-w-4xl mx-auto p-6 bg-gray-800 rounded-lg shadow-lg mt-6">
      <!-- Titre du projet -->
      <h2 class="text-3xl font-bold mb-4 text-blue-300">Portfolio</h2>
      
      <!-- Image du projet -->
      <img class="rounded-lg mb-4 w-full" src="/src/assets/portfolio.jpg" alt="Aperçu de WaveTask">
    
      <!-- Description du projet -->
      <p class="text-gray-300 mb-4">
        Ce site est développé à l'aide du framework Symfony 5, de la collection d'outils Bootstrap 5 et Jquery 3.6. 
        Le but est de présenter un aperçu de mes compétences, en créant de petits projets qui exploitent différentes techniques et technologies. J'ai aussi intégré, à des fins de tests, une démo live de Prestashop et Magento.
      </p>
      <div class="flex space-x-4">
        <!-- Lien vers le site avec logo -->
        <a href="https://wavetask.com" target="_blank" class="flex items-center space-x-2 text-blue-400 hover:underline">
          <img src="https://cdn-icons-png.flaticon.com/512/1006/1006771.png" class="w-6 h-6" alt="Website Logo">
          <span>Visiter le site</span>
        </a>
        
        <!-- Lien vers le GitHub avec un logo mieux adapté -->
        <a href="https://github.com/NicolasDiot/WaveTask" target="_blank" class="flex items-center space-x-2 text-blue-400 hover:underline">
          <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" class="w-6 h-6" alt="GitHub Logo">
          <span>Visiter le GitHub</span>
        </a>
      </div>
    </div>
  </div>
          
</template>


<script setup>

</script>


<style>
#portfolio {
  padding-top : 4rem;
  padding-bottom : 5rem;
}
</style>
