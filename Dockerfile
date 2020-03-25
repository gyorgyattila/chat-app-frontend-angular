### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
COPY nginx.conf ./
RUN npm install
COPY . .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
EXPOSE 4200
COPY --from=build /usr/src/app/dist/chat-app /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf