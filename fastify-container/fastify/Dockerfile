FROM node:22

WORKDIR /app

COPY package.json package-lock.json .

RUN npm install && npm install -g nodemon

COPY . .


ARG LISTEN_ADDRESS
ARG LISTEN_PORT

EXPOSE ${LISTEN_PORT}}

ENV LISTEN_ADDRESS=${LISTEN_ADDRESS}
ENV LISTEN_PORT=${LISTEN_PORT}

CMD ["npm", "start", "dev"]
