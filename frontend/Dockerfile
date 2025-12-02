# frontend/Dockerfile
FROM node:20-alpine

WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm install

# Source-Code rein
COPY . .

# Nuxt Build für Produktion
RUN npm run build

# Production-Server starten
# In package.json sollte stehen: "start": "node .output/server/index.mjs"
EXPOSE 3000
CMD ["npm", "run", "start"]
