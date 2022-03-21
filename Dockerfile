FROM node:16.14.0 AS builder

WORKDIR /app

COPY . .

RUN npm install -f
RUN npm run build

FROM nginx:1.21.4-alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY conf/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/galaxy-quest .

EXPOSE 80/tcp

ENTRYPOINT ["nginx", "-g", "daemon off;"]
