FROM node:16 as build

WORkDIR /transformatec-final

COPY package*.json .


RUN npm install


COPY . .


RUN npm rum build