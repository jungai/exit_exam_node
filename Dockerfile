FROM node:10-alpine
WORKDIR /usr/

COPY . ./

RUN yarn

RUN yarn build

EXPOSE 3002

CMD yarn start
