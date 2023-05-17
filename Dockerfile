FROM node:current-slim

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm install

COPY next.config.js ./next.config.js
COPY postcss.config.js ./postcss.config.js
COPY tailwind.config.js ./tailwind.config.js
COPY jsconfig.json ./jsconfig.json
COPY .env ./.env

COPY app ./app
COPY components ./components
COPY models ./models
COPY public ./public
COPY styles ./styles
COPY utils ./utils

CMD ["npm", "run", "dev"]
