FROM node:alpine

ADD package.json /code/
RUN npm install --production

ADD . /code

CMD npm install
