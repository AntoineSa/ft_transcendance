FROM	alpine:latest
RUN		apk add npm
RUN		apk add curl
RUN		mkdir project
WORKDIR	project/
RUN		npm install --save-dev -g newman
COPY	transcendance.postman_collection.json .
COPY	wait-for-backend.sh .

CMD		[ "/bin/sh", "wait-for-backend.sh", "newman", "run", "transcendance.postman_collection.json"]
