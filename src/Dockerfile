FROM node:22-slim AS build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install && npm install -g nodemon


COPY . .


ARG LISTEN_ADDRESS="0.0.0.0"
ARG LISTEN_PORT=8000

ENV LISTEN_ADDRESS=${LISTEN_ADDRESS}
ENV LISTEN_PORT=${LISTEN_PORT}



EXPOSE ${LISTEN_PORT}

CMD ["npm", "start", "dev"]
