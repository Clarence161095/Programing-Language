FROM node:14

WORKDIR /nest_app

COPY src ./src
COPY nest-cli.json  ./
COPY package* ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm install

# COPY . .

EXPOSE 5000

CMD [ "npm", "run", "start:dev" ]
