FROM alpine:3.4

RUN apk add --no-cache curl

RUN mkdir -p /app
COPY poll.sh /app/poll.sh

CMD [ "/app/poll.sh" ]
