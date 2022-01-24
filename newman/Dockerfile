FROM	alpine:latest
RUN		apk add npm
RUN		mkdir project
WORKDIR	project/
RUN		npm install --save-dev -g newman
COPY	transcendance.postman_collection.json .

CMD		[ "newman", "run", "transcendance.postman_collection.json"]
