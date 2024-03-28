#!/bin/sh

envsubst < /etc/nginx/conf.d/nginx_app.env > /etc/nginx/conf.d/default.conf

rm -rf /etc/nginx/conf.d/nginx_app.env

echo ' *** [INFO] Reading environment variables.'

envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js

rm -rf /usr/share/nginx/html/assets/env.template.js

echo ' *** [INFO] Starting Nginx Server.'

nginx -g 'daemon off;'
