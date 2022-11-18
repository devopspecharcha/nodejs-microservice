FROM node:16

RUN mkdir -p /opt/app/

WORKDIR /opt/app/

COPY . /opt/app/

RUN npm install

CMD [ "node" , "server.js" ]