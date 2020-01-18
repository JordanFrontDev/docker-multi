FROM node:alpine as builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY ./ ./
RUN npm run build

FROM ngynx
EXPOSE 3000
COPY ./ngynx/default.conf /etc/ngynx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/ngynx/html
