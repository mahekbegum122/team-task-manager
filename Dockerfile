FROM node:20

WORKDIR /app

COPY backend/package*.json ./backend/

RUN cd backend && npm install

COPY backend ./backend

EXPOSE 5001

CMD ["node", "backend/server.js"]