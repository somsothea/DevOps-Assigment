FROM node:18.20.2-slim
ENV TZ="Asia/Bangkok"
WORKDIR /app
COPY package.json package-lock.json ./
RUN (cd frontend && npm install)
COPY . .
RUN (cd frontend && npm install && npm run build)
EXPOSE 5000
CMD ["npm", "run", "dev"]
