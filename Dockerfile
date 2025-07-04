FROM node:23-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

FROM nginx:alpine

# Supprimer la page par défaut de nginx
RUN rm -rf /usr/share/nginx/html/*

# Copie des fichiers buildés
COPY --from=builder /app/dist/app/browser/ /usr/share/nginx/html

# Copie du fichier de conf nginx
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
