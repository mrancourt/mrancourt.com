FROM node:7.8.0

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install -g serve
EXPOSE 5000

COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm install

COPY . .

RUN npm run build --production