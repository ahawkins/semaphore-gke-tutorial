#!/usr/bin/env sh

while true; do
	n="$(shuf -i 1-10 -n 1)"
	echo "Incrementing counter by ${n} ..."
	curl -s -X POST -d "n=${n}" "${API_URL}/"

	sleep 1
done
