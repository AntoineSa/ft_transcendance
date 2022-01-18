FROM	alpine:latest
RUN		apk add npm
RUN		mkdir project
WORKDIR	project/
RUN		npm install --save-dev jest @babel/core babel-jest
RUN		npm install --save-dev @babel/core babel-jest
RUN		npm install --save-dev node-fetch@2
COPY	user.test.js src/
ENV		NODE_OPTIONS=--experimental-vm-modules
CMD		[ "npx", "jest"]
