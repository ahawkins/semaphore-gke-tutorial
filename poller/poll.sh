#!/usr/bin/env sh

while true; do
	echo "Current counter: $(curl -s "${API_URL}/")"
	sleep 2
done
