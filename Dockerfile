FROM node:12

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./package*.json ./

# If you are building your code for production
#RUN npm ci --only=production

# Install node_modules, make build package
RUN npm install
RUN npm build

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]