FROM node:18

WORKDIR /app

# Copier package.json depuis la racine
COPY package*.json ./

RUN npm install

# Copier server.js depuis la racine
COPY server.js .

# Copier models si utilisé
COPY models ./models

EXPOSE 5000

CMD ["node", "server.js"]
