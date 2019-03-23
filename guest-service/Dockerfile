FROM node:11.12-alpine

WORKDIR /usr/src/app
COPY . .

## Install dependencies
RUN npm install
#RUN npm ci --only=production

ENTRYPOINT ["npm", "run", "babel"]

EXPOSE 3002
