FROM node:11.6.0

# Create app directory
RUN mkdir -p /usr/src/client
WORKDIR /usr/src/client

# Install app dependencies
COPY package.json /usr/src/client
RUN npm install

# Bundle app source
COPY . /usr/src/client

ENTRYPOINT [ "/bin/bash" ]