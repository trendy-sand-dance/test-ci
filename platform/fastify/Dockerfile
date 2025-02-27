FROM node:22 AS build-stage

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install && npm install -g nodemon


COPY . .

CMD ["npm", "run", "build"]


FROM node:22 AS final-stage

WORKDIR /app
COPY package.json ./
ARG LISTEN_ADDRESS
ARG LISTEN_PORT


ENV LISTEN_ADDRESS=${LISTEN_ADDRESS}
ENV LISTEN_PORT=${LISTEN_PORT}

RUN npm install

COPY --from=build-stage /app/dist ./dist

EXPOSE ${LISTEN_PORT}

# CMD ["npm", "start", "dev"]
CMD ["npm", "start"]
