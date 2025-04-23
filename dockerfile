FROM node:20.19.0-alpine

# Définir le répertoire de travail
WORKDIR /src

# Installer le serveur statique `serve`
RUN npm install -g serve

# Copier uniquement les fichiers nécessaires pour installer les dépendances
COPY package.json .

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application pour la production
RUN npm run build

# Exposer le port sur lequel l'application sera servie
EXPOSE 3000

# Commande pour démarrer le serveur statique
CMD ["serve", "-s", "dist", "-l", "3000"]
