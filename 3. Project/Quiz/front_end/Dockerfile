FROM node:14 AS front_end

WORKDIR /front_end

COPY ./front_end/public ./public
COPY ./front_end/src ./src

COPY ./front_end/.env ./
COPY ./front_end/tsconfig.json ./
COPY ./front_end/yarn.lock ./
COPY ./front_end/package*.json ./

RUN yarn install

EXPOSE 3000
CMD [ "yarn", "start" ]

