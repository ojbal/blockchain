FROM node:8

WORKDIR /APP

COPY package*.json ./

COPY . .

CMD ["npm","run dev-test"]