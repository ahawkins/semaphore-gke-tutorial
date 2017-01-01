FROM alpine:3.4

RUN apk add --no-cache curl

RUN mkdir -p /app
COPY count.sh /app/count.sh

CMD [ "/app/count.sh" ]
