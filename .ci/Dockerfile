FROM node:18.10-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build --prod

FROM nginx:alpine

ENV uri='$uri' host='$host' scheme='$scheme' remote_addr='$remote_addr' proxy_add_x_forwarded_for='$proxy_add_x_forwarded_for'

COPY .ci/nginx.conf /etc/nginx/conf.d/nginx_app.env
COPY --from=build /app/www/ /usr/share/nginx/html
COPY .ci/entrypoint.sh /

RUN apk add --no-cache gettext && \
    rm -rf /var/cache/apk/* && \
    rm -f /etc/nginx/conf.d/default.conf && \
    chmod +x /entrypoint.sh

EXPOSE 80

CMD [ "/entrypoint.sh" ]
