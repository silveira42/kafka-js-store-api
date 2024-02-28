FROM node:21-alpine

# This is the directory "inside" the container
WORKDIR /kafka-js-store-api/

# Copying necessary files
COPY public/ /kafka-js-store-api/public
COPY src/ /kafka-js-store-api/src
COPY package.json /kafka-js-store-api/

# Installing node modules
RUN npm install

# Starting the server
CMD ["npm", "start"]
