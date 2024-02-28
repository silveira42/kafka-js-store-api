FROM node:21-alpine

# This is the directory "inside" the container
WORKDIR /silver-finances-api/

# Copying necessary files
COPY public/ /silver-finances-api/public
COPY src/ /silver-finances-api/src
COPY package.json /silver-finances-api/

# Installing node modules
RUN npm install

# Starting the server
CMD ["npm", "start"]
