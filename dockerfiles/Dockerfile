# build
FROM node:18-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production
RUN npm prune --production

COPY . ./

# release
FROM node:18-alpine
WORKDIR /app

# env vars
ENV AWS_NODEJS_CONNECTION_REUSE_ENABLED=1
ENV NODE_ENV=development

# copy
COPY --from=builder /app/newrelic.js /app/
COPY --from=builder /app/package.json /app/
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/src /app/src

# run
EXPOSE 3000
CMD ["node", "src/index.js"]
