FROM node:14 AS back_end

WORKDIR /back_end

COPY ./back_end/controllers ./controllers
COPY ./back_end/models ./models
COPY ./back_end/routers ./routers
COPY ./back_end/utils ./utils

COPY ./back_end/.env ./
COPY ./back_end/index.js ./
COPY ./back_end/package*.json ./
COPY ./back_end/yarn.lock ./

RUN yarn install

EXPOSE 9000
CMD [ "yarn", "start" ]
