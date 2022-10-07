FROM node:16-alpine 
LABEL version=0.1.0
ADD ./app /app
WORKDIR /app
RUN cd /app && npm i
CMD ["node", "/app/index.ts"]