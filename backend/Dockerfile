# backend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Nur package* zuerst, damit Docker-Cache genutzt wird
COPY package*.json ./
RUN npm install --production

# Restlicher Code
COPY . .

EXPOSE 4000

CMD ["npm", "start"]
