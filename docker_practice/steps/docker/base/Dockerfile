FROM nginx:latest

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./src src
COPY tsconfig.json .

RUN npm install && npm run build

CMD ["", "build/src/index.js"]
