FROM node:18

WORKDIR /app

# Copier package.json 
COPY package*.json ./

RUN npm install

# Copier server.js 
COPY server.js .

# Copier models
COPY models ./models

EXPOSE 5000

CMD ["node", "server.js"]
