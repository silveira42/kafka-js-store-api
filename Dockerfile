FROM node:21-alpine

# This is the directory "inside" the container
WORKDIR /kafka-store-api/

# Copying necessary files
COPY src/ /kafka-store-api/src
COPY package.json /kafka-store-api/
COPY .env /kafka-store-api/

# Installing node modules
RUN npm install --omit=dev

# Starting the server
CMD ["npm", "start"]

# Command to build image:
# docker image build -t kafka-store-api:latest .
