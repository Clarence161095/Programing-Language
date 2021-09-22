FROM node:14-alpine

WORKDIR /nest-app

COPY ./src ./src
COPY ./nest-cli.json  ./
COPY ./package* ./
COPY ./tsconfig.build.json ./
COPY ./tsconfig.json ./

RUN npm install

COPY . .

EXPOSE 6000

CMD ["npm", "start:dev"]