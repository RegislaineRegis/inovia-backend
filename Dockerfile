FROM node as builder
WORKDIR /app
COPY . .
RUN \
  yarn install --frozen-lockfile && \
  yarn build

FROM alpine as runner
ENV \
  # APP
  NODE_ENV="development" \
  PORT="3000"
# other env vars goes here
RUN apk add --update nodejs
WORKDIR /app
COPY --from=builder /app/dist/ /app/
EXPOSE ${PORT}
CMD node index.js