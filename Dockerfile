# Étape 1 : Construire l'application
FROM node:18 as build-stage

# Créer le répertoire de l'application
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install
RUN npm i cors

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application Vue.js
RUN npm run build
RUN nohup node server.js &
# Étape 2 : Exécuter une image nginx pour servir l'application
FROM nginx:alpine

# Copier les fichiers construits dans le dossier par défaut de Nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copier la configuration personnalisée de Nginx (si nécessaire)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
