FROM node:16 as build
WORkDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm rum build

# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template

COPY --from=react-build /app/build /usr/share/nginx/html

ENV PORT 443
ENV HOST 0.0.0.0
EXPOSE 443
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"