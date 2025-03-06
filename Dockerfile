# This file is currently just the dev file, we should have some mekanism that allows us the specify the build type.
FROM node:22-slim AS build-stage

WORKDIR /app

COPY src/package.json src/package-lock.json ./

RUN npm install -D


COPY src/ .


ARG LISTEN_ADDRESS
ARG LISTEN_PORT="5000"

ENV LISTEN_ADDRESS=${LISTEN_ADDRESS}
ENV LISTEN_PORT=${LISTEN_PORT}
ENV TEST_STR=test123


EXPOSE ${LISTEN_PORT}

CMD ["npm", "start", "dev"]
