FROM node:10-alpine
COPY ./server /app
COPY ./node_modules /app/node_modules
COPY ./build /app/web
WORKDIR /app
EXPOSE 3000
CMD ["node", "server.js"]
