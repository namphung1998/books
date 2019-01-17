FROM node:11.6.0

# Create app directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# Install app dependencies
COPY package.json /usr/src/server
RUN npm install

# Bundle app source
COPY . /usr/src/server

# Build arguments
ARG NODE_VERSION=11.6.0

# Environment
ENV NODE_VERSION $NODE_VERSION