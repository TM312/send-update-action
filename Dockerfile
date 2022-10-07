FROM node:16-alpine 
LABEL version=0.1.0
ADD ./src /src
# WORKDIR /src
RUN cd /src && npm i
RUN npm run build
CMD ["node", "/build/send-update.js"]