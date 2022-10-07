FROM node:18-alpine 
LABEL version=0.1.0
WORKDIR /app

COPY . .
RUN npm i
RUN npm run build

CMD ["node", "./build/send-update.js"]